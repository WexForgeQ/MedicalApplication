import { CardGrid, Pagination } from '@core';
import type { PaginatedData } from '@core/types';
import type { Doctor } from '@features/doctors/types';
import { DoctorsGridItem } from './doctors-grid-item.component';

interface DoctorsContentProps {
	doctors: PaginatedData<Doctor>;
	getDoctors: (pageNumber: number) => void;
	isLoading: boolean;
}

export const DoctorsContent = ({ doctors, isLoading, getDoctors }: DoctorsContentProps) => {
	return (
		<section className="flex min-h-[499px] w-[1180px] flex-col gap-[40px]">
			<CardGrid
				isLoading={isLoading}
				items={doctors.items}
				ItemComponent={DoctorsGridItem}
				maxSkeletonItemsCount={4}
			/>
			{!isLoading && doctors.totalCount > 0 && (
				<div className="flex w-full justify-center">
					<Pagination
						total={doctors.totalPages}
						current={doctors.pageNumber}
						onChange={getDoctors}
					/>
				</div>
			)}
		</section>
	);
};
