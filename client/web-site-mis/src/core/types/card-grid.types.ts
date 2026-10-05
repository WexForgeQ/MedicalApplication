export interface ItemData {
	id: string;
}

export interface CardGridItemProps<T extends ItemData> {
	data?: T;
	isLoading: boolean;
}

type ItemComponentType<T extends ItemData> = <K extends CardGridItemProps<T>>(
	props: K,
) => React.JSX.Element;

export interface CardGridProps<T extends ItemData> {
	items: T[];
	isLoading: boolean;
	cachedLoading?: boolean;
	maxSkeletonItemsCount: number;
	ItemComponent: ItemComponentType<T>;
	className?: string;
}
