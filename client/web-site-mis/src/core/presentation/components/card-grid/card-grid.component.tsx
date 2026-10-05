import type { CardGridProps, ItemData } from '@core/types';
import { twMerge } from 'tailwind-merge';

export const CardGrid = <T extends ItemData>({
	isLoading,
	items,
	ItemComponent,
	cachedLoading,
	maxSkeletonItemsCount,
	className,
}: CardGridProps<T>) => {
	return (
		<div className={twMerge('flex flex-wrap gap-x-[20px] gap-y-[40px]', className)}>
			{!!cachedLoading
				? items.map((item) => (
						<ItemComponent key={item.id} data={item} isLoading={isLoading} />
					))
				: !isLoading &&
					items.map((item) => (
						<ItemComponent key={item.id} data={item} isLoading={false} />
					))}
			{isLoading &&
				Array.from({
					length: !!cachedLoading
						? Math.abs(maxSkeletonItemsCount - (items.length % maxSkeletonItemsCount))
						: maxSkeletonItemsCount,
				}).map((_, index) => <ItemComponent key={index} isLoading={true} />)}
		</div>
	);
};
