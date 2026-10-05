import type { Stock } from '@features/stocks/types';
import { MainStocksListItem } from './main-stocks-list-item.component';

interface MainStocksListProps {
	items: Stock[];
	isLoading: boolean;
	pageSize: number;
}

export const MainStocksList = ({ isLoading, items, pageSize }: MainStocksListProps) => {
	return (
		<div className="flex min-h-[304px] flex-wrap gap-[20px]">
			{items.map((item) => (
				<MainStocksListItem key={item.id} data={item} isLoading={false} />
			))}
			{isLoading &&
				Array.from({ length: pageSize }).map((_, index) => (
					<MainStocksListItem key={index} isLoading={isLoading} />
				))}
		</div>
	);
};
