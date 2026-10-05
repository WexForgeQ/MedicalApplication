import { Button } from '@core';
import { defPaginatedData } from '@core/constants';
import type { PaginatedData } from '@core/types';
import { getStocksList } from '@features/stocks/store';
import type { Stock } from '@features/stocks/types';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useState } from 'react';
import { MainSectionTitle } from '../main-section-title.component';
import { MainSection } from '../main-section.component';
import { MainStocksList } from './main-stocks-list.component';

export const MainStoks = () => {
	const [stocks, setStocks] = useState<PaginatedData<Stock>>(defPaginatedData);
	const stocksListLoading = useSliceField('stocksSlice', 'loadings', 'getStocksList');
	const getStocksListLastProps = useSliceField('stocksSlice', 'data', 'lastGetStocksProps');
	const dispatch = useAppDispatch();

	const getStocks = (pN: number) => {
		dispatch(
			getStocksList({
				params: {
					pageSize: 3,
					pageNumber: pN,
				},
			}),
		)
			.unwrap()
			.then((res) => {
				setStocks((curr) =>
					res.data!.pageNumber === 1
						? res.data!
						: { ...res.data!, items: [...curr.items, ...res.data!.items] },
				);
			})
			.catch(() => {});
	};

	useEffect(() => {
		if (!getStocksListLastProps) {
			getStocks(1);
		}
	}, []);

	return (
		<MainSection contentWrapperClassName="flex-col gap-[30px]" sectionClassName="bg-[#F6F5FA]">
			<MainSectionTitle title="Акции" />
			<div className="flex flex-col items-center gap-[50px]">
				<MainStocksList isLoading={stocksListLoading} pageSize={3} items={stocks.items} />
				{stocks.hasNextPage && (
					<Button
						variant="white"
						disabled={stocksListLoading}
						onClick={() => getStocks(stocks.pageNumber + 1)}
					>
						Показать больше
					</Button>
				)}
			</div>
		</MainSection>
	);
};
