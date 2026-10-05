type PrevDepth<D extends number> = D extends 5
	? 4
	: D extends 4
		? 3
		: D extends 3
			? 2
			: D extends 2
				? 1
				: D extends 1
					? 0
					: never;

type KeyOf<T, Prefix extends string = '', Depth extends number = 5> = Depth extends 0
	? never
	: T extends object
		? {
				[K in keyof T]: K extends string
					? `${Prefix}${K}` | KeyOf<T[K], `${Prefix}${K}.`, PrevDepth<Depth>>
					: never;
			}[keyof T]
		: never;

export type NestedKeyOf<T, Depth extends number = 5, K extends string = string> = Extract<
	KeyOf<T, '', Depth>,
	K
>;
