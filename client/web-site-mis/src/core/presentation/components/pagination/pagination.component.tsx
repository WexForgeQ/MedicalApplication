import { memo } from 'react';
import { PaginationInfo } from './pagination-info.component';
import { PaginationList, type PaginationListProps } from './pagination-list.component';

export const Pagination = memo(({ current, total, onChange }: PaginationListProps) => {
	return (
		<div className="flex select-none flex-row items-center gap-[24px]">
			<PaginationInfo total={total} current={current} />
			<PaginationList total={total} current={current} onChange={onChange} />
		</div>
	);
});
