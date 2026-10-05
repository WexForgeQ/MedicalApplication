import { useCallback, useEffect, useRef, type RefObject } from 'react';

type HeightCompareFunc = (scrollHeight: number, scrollTop: number, clientHeight: number) => boolean;

const defCompareBottom = (scrollHeight: number, scrollTop: number, clientHeight: number): boolean =>
	Math.abs(scrollHeight - scrollTop - clientHeight) <= 20;

const isScrollEndSupported = (() => {
	try {
		const testElement = document.createElement('div');
		const tCalback = () => {};
		testElement.addEventListener('scrollend', tCalback);
		testElement.removeEventListener('scrollend', tCalback);
		return true;
	} catch (error) {
		return false;
	}
})();

export interface InfiniteScrollOptions {
	isLoading: boolean;
	totalCount: number;
	currentPage: number;
	fetchCallback: (nextPage: number) => void;
}

interface UseInfiniteScrollOptionsArg {
	scrollOptions?: InfiniteScrollOptions;
	bottomCompare?: HeightCompareFunc;
}

export const useInfiniteScroll = <T extends HTMLElement>(
	dataLen: number,
	targetRef: RefObject<T | null>, // ✅ теперь допускается null
	options: UseInfiniteScrollOptionsArg,
) => {
	const lastScrollTopRef = useRef<number>(0);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	if (!options.scrollOptions) {
		return null;
	}

	const fetchMore = useCallback(
		(scrollHeight: number, scrollTop: number, clientHeight: number) => {
			const isVerticalScrollDown = scrollTop > lastScrollTopRef.current;
			const isVerticalScrollUp = scrollTop < lastScrollTopRef.current;
			lastScrollTopRef.current = scrollTop;

			if (isVerticalScrollDown && !isVerticalScrollUp) {
				const compBottom = options.bottomCompare
					? options.bottomCompare(scrollHeight, scrollTop, clientHeight)
					: defCompareBottom(scrollHeight, scrollTop, clientHeight);

				if (
					compBottom &&
					!options.scrollOptions!.isLoading &&
					dataLen < options.scrollOptions!.totalCount
				) {
					options.scrollOptions!.fetchCallback(options.scrollOptions!.currentPage + 1);
				}
			}
		},
		[dataLen, options],
	);

	const scrollTimeoutHandle = useCallback(
		(e: Event) => {
			const { scrollHeight, scrollTop, clientHeight } = e.currentTarget as T;
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = setTimeout(
				() => fetchMore(scrollHeight, scrollTop, clientHeight),
				100,
			);
		},
		[fetchMore],
	);

	const scrollHandle = useCallback(
		(e: Event) => {
			const { scrollHeight, scrollTop, clientHeight } = e.currentTarget as T;
			fetchMore(scrollHeight, scrollTop, clientHeight);
		},
		[fetchMore],
	);

	useEffect(() => {
		const target = targetRef.current;
		if (!target) return;

		target.addEventListener(
			isScrollEndSupported ? 'scrollend' : 'scroll',
			isScrollEndSupported ? scrollHandle : scrollTimeoutHandle,
		);

		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			target.removeEventListener(
				isScrollEndSupported ? 'scrollend' : 'scroll',
				isScrollEndSupported ? scrollHandle : scrollTimeoutHandle,
			);
		};
	}, [targetRef, scrollHandle]);
};
