import { ModalLoadingFallback } from '@core';
import type { ModalWrapperProps } from '@core/types';
import {
	type ComponentType,
	createContext,
	lazy,
	Suspense,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';

export interface ModalContextType<ParamsMap extends Record<string, any>> {
	open: <K extends keyof ParamsMap>(modalId: K, params?: ParamsMap[K]) => void;
	close: (modalId: keyof ParamsMap) => void;
	isModalOpened: (modalId: keyof ParamsMap) => boolean;
	getModalParams: <K extends keyof ParamsMap>(modalId: K) => ParamsMap[K] | null;
	modalsChanged: boolean;
}

export const createModalSystem = <ParamsMap extends Record<string, any>>() => {
	const ModalInternalContext = createContext<ModalContextType<ParamsMap> | undefined>(undefined);

	const ModalManagerContext = createContext<
		Pick<ModalContextType<ParamsMap>, 'open' | 'close'> | undefined
	>(undefined);

	const ModalStateContext = createContext<
		| Pick<ModalContextType<ParamsMap>, 'isModalOpened' | 'getModalParams' | 'modalsChanged'>
		| undefined
	>(undefined);

	const ModalManagerProvider = ({ children }: { children: React.ReactNode }) => {
		const modals = useRef<Map<keyof ParamsMap, ParamsMap[keyof ParamsMap] | null>>(new Map());
		const [modalsChanged, setModalsChanged] = useState(false);

		const open = useCallback<ModalContextType<ParamsMap>['open']>((modalId, params) => {
			if (modals.current.has(modalId)) {
				throw new Error(`Modal ${String(modalId)} already open`);
			}
			modals.current.set(modalId, params ?? null);
			setModalsChanged((v) => !v);
		}, []);

		const close = useCallback<ModalContextType<ParamsMap>['close']>((modalId) => {
			if (!modals.current.has(modalId)) {
				throw new Error(`Modal ${String(modalId)} is not open`);
			}
			modals.current.delete(modalId);
			setModalsChanged((v) => !v);
		}, []);

		const isModalOpened = useCallback(
			(modalId: keyof ParamsMap) => modals.current.has(modalId),
			[],
		);

		const getModalParams = useCallback(
			<K extends keyof ParamsMap>(modalId: K): ParamsMap[K] | null =>
				(modals.current.get(modalId) as ParamsMap[K] | null) ?? null,
			[],
		);

		useEffect(() => () => modals.current.clear(), []);

		const internalValue = useMemo(
			() => ({ open, close, isModalOpened, getModalParams, modalsChanged }),
			[open, close, isModalOpened, getModalParams, modalsChanged],
		);

		const managerValue = useMemo(() => ({ open, close }), [open, close]);

		return (
			<ModalInternalContext.Provider value={internalValue}>
				<ModalManagerContext.Provider value={managerValue}>
					{children}
				</ModalManagerContext.Provider>
			</ModalInternalContext.Provider>
		);
	};

	const ModalStateProvider = ({ children }: { children: React.ReactNode }) => {
		const internal = useContext(ModalInternalContext);
		if (!internal) {
			throw new Error('ModalStateProvider must be under ModalManagerProvider');
		}

		const { isModalOpened, getModalParams, modalsChanged } = internal;
		const stateValue = useMemo(
			() => ({ isModalOpened, getModalParams, modalsChanged }),
			[modalsChanged],
		);

		return (
			<ModalStateContext.Provider value={stateValue}>{children}</ModalStateContext.Provider>
		);
	};

	const useModalManager = () => {
		const ctx = useContext(ModalManagerContext);
		if (!ctx) {
			throw new Error('useModalManager must be used within ModalManagerProvider');
		}
		return ctx;
	};

	const useModalState = () => {
		const ctx = useContext(ModalStateContext);
		if (!ctx) {
			throw new Error('useModalState must be used within ModalStateProvider');
		}
		return ctx;
	};

	function withModal<K extends keyof ParamsMap, P extends ModalWrapperProps<ParamsMap[K]>>(
		modalId: K,
		Component: React.ComponentType<P>,
	) {
		return (props: Omit<P, 'params' | 'close'>) => {
			const { close } = useModalManager();
			const state = useContext(ModalStateContext);
			if (!state) {
				throw new Error('withModal must be under ModalStateProvider');
			}
			const { isModalOpened, getModalParams, modalsChanged } = state;

			const { isOpened, params } = useMemo(
				() => ({
					isOpened: isModalOpened(modalId),
					params: getModalParams(modalId),
				}),
				[modalsChanged],
			);

			if (!isOpened) return null;

			return <Component {...(props as P)} params={params} close={() => close(modalId)} />;
		};
	}

	function withLazyModal<K extends keyof ParamsMap>(
		modalId: K,
		importFn: () => Promise<{ default: ComponentType<ModalWrapperProps<ParamsMap[K]>> }>,
	) {
		const LazyComponent = lazy(importFn);

		const LazyModalWrapper = (
			props: Omit<ModalWrapperProps<ParamsMap[K]>, 'params' | 'close'>,
		) => {
			const { close } = useModalManager();
			const state = useModalState();

			const { isOpened, params } = useMemo(
				() => ({
					isOpened: state.isModalOpened(modalId),
					params: state.getModalParams(modalId),
				}),
				[state.modalsChanged],
			);

			if (!isOpened) return null;

			return (
				<Suspense fallback={<ModalLoadingFallback />}>
					<LazyComponent {...props} params={params} close={() => close(modalId)} />
				</Suspense>
			);
		};

		return LazyModalWrapper;
	}

	return {
		ModalManagerProvider,
		ModalStateProvider,
		useModalManager,
		useModalState,
		withModal,
		withLazyModal,
	};
};
