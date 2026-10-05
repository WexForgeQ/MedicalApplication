import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { PaginationArrow, type PaginationArrowVariants } from './pagination-arrow.component';
import { PaginationItem } from './pagination-item.component';
import { PaginationStub } from './pagination-stub.component';

export interface PaginationListProps {
	total: number;
	current: number;
	onChange: (value: number) => void;
}

interface Item {
	id: string;
	num: number;
}

export const PaginationList = memo(({ total, current, onChange }: PaginationListProps) => {
	const [itemsList, setItemsList] = useState<Item[]>([]);
	const [expanded, setExpanded] = useState<boolean>(false);

	const onArrowClickHandle = useCallback(
		(value: PaginationArrowVariants) => {
			onChange(value === 'left' ? current - 1 : current + 1);
		},
		[current],
	);

	useEffect(() => {
		setItemsList(
			Array.from({ length: total }, (_, index) => ({
				id: crypto.randomUUID(),
				num: index + 1,
			})),
		);
	}, [total]);

	const pagesItems = useMemo(() => {
		if (itemsList.length <= 5 || expanded || current === itemsList.length) {
			return itemsList.map((item) => (
				<PaginationItem
					key={item.id}
					onClick={onChange}
					isSelected={current === item.num}
					num={item.num}
				/>
			));
		}
		const last = itemsList[itemsList.length - 1];
		return (
			<>
				{itemsList.slice(0, current < 3 ? 3 : current).map((item) => (
					<PaginationItem
						key={item.id}
						onClick={onChange}
						isSelected={current === item.num}
						num={item.num}
					/>
				))}
				{expanded ? (
					itemsList
						.slice(3, -1)
						.map((item) => (
							<PaginationItem
								key={item.id}
								onClick={onChange}
								isSelected={current === item.num}
								num={item.num}
							/>
						))
				) : (
					<PaginationStub onClick={() => setExpanded(true)} />
				)}
				<PaginationItem
					key={last.id}
					onClick={onChange}
					isSelected={current === last.num}
					num={last.num}
				/>
			</>
		);
	}, [itemsList, expanded, current]);

	return (
		<div className="flex flex-row gap-[8px]">
			<PaginationArrow variant="left" disabled={current === 1} onClick={onArrowClickHandle} />
			{pagesItems}
			<PaginationArrow
				variant="right"
				disabled={current === total}
				onClick={onArrowClickHandle}
			/>
		</div>
	);
});
