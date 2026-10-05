import { type SliceRootState, useAppSelector } from '@store';
import { createSelector, type Selector } from 'reselect';

export const selectorCache = new Map<string, Selector<SliceRootState, any>>();

const safeClone = <T>(value: T): T => {
	if (Array.isArray(value)) return [...value] as T;
	if (typeof value === 'object' && value !== null) return { ...value } as T;
	return value;
};

const createSafeSelector = <
	Slice extends keyof SliceRootState,
	Group extends keyof SliceRootState[Slice],
	Key extends keyof SliceRootState[Slice][Group],
	Transformer extends (value: SliceRootState[Slice][Group][Key]) => any,
>(
	cacheKey: string,
	extractor: (state: SliceRootState) => SliceRootState[Slice][Group][Key],
	transformer?: Transformer,
): Selector<
	SliceRootState,
	Transformer extends (...args: any[]) => infer R ? R : SliceRootState[Slice][Group][Key]
> => {
	if (selectorCache.has(cacheKey)) {
		return selectorCache.get(cacheKey)!;
	}

	const selector = createSelector([extractor], (value) => {
		const cloned = safeClone(value);
		return transformer ? transformer(cloned) : cloned;
	});

	selectorCache.set(cacheKey, selector);
	return selector;
};

export const getFieldSelector = <
	Slice extends keyof SliceRootState,
	Group extends keyof SliceRootState[Slice],
	Key extends keyof SliceRootState[Slice][Group],
	Return = SliceRootState[Slice][Group][Key],
>(
	slice: Slice,
	group: Group,
	key: Key,
	transformer?: (value: SliceRootState[Slice][Group][Key]) => Return,
): Selector<SliceRootState, Return> => {
	const cacheKey = `${String(slice)}_${String(group)}_${String(key)}`;
	const extractor = (state: SliceRootState) => state[slice][group][key];
	return createSafeSelector(cacheKey, extractor, transformer);
};

export const useSliceField = <
	Slice extends keyof SliceRootState,
	Group extends keyof SliceRootState[Slice],
	Key extends keyof SliceRootState[Slice][Group],
	Return = SliceRootState[Slice][Group][Key],
>(
	slice: Slice,
	group: Group,
	key: Key,
	transformer?: (value: SliceRootState[Slice][Group][Key]) => Return,
): Return => {
	const selector = getFieldSelector(slice, group, key, transformer);
	return useAppSelector(selector);
};
