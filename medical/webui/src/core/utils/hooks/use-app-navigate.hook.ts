import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type SearchParams = { [key: string]: string };
/**
 * Custom hook to navigate to a specified path with optional query parameters and navigation state.
 *
 * @returns {Function} - A memoized function that navigates to a given path.
 *
 * @function
 * @param {string} [path] - The target path to navigate to.
 * @param {Object.<string, string>} [searchParams] - Optional query parameters to append to the URL.
 * @param {boolean} [replace=false] - If true, replaces the current entry in the history stack.
 * @param {unknown} [state] - Optional state object to pass to the destination route.
 *
 * @example
 * const navigate = useAppNavigate();
 */

export const useAppNavigate = () => {
	const navigate = useNavigate();

	const appNavigate = useCallback(
		(path?: string, searchParams?: SearchParams, replace?: boolean, state?: unknown) => {
			const search = searchParams ? `?${new URLSearchParams(searchParams).toString()}` : '';
			navigate(`${path}${search}`, { replace: replace || false, state: state });
		},
		[navigate],
	);

	return appNavigate;
};
