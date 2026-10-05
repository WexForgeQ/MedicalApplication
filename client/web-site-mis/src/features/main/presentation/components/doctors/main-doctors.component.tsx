import { Button, CardGrid, CheckboxSelect } from '@core';
import { defPaginatedData } from '@core/constants';
import type { PaginatedData, SelectOption } from '@core/types';
import { DoctorsGridItem } from '@features/doctors/presentation/components';
import { getDoctorsList, getSpecializationList } from '@features/doctors/store';
import type { Doctor } from '@features/doctors/types';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useState } from 'react';
import { MainSectionTitle } from '../main-section-title.component';
import { MainSection } from '../main-section.component';

export const MainDoctors = () => {
	const [initLoading, setInitLoading] = useState<boolean>(true);
	const [doctors, setDoctors] = useState<PaginatedData<Doctor>>(defPaginatedData);
	const [specOptions, setSpecOptions] = useState<SelectOption[]>([]);
	const [selectedSpec, setSelectedSpec] = useState<string>('');
	const doctorsListLoading = useSliceField('doctorsSlice', 'loadings', 'getDoctorsList');
	const getDoctorsListLastProps = useSliceField('doctorsSlice', 'data', 'lastGetDoctorsProps');
	const dispatch = useAppDispatch();

	const getDoctors = (pN: number) => {
		dispatch(
			getDoctorsList({
				params: {
					pageSize: 4,
					pageNumber: pN,
					filters: {
						specializationId: selectedSpec.length > 0 ? selectedSpec : undefined,
					},
				},
			}),
		)
			.unwrap()
			.then((res) => {
				setDoctors((curr) =>
					res.data!.pageNumber === 1
						? res.data!
						: { ...res.data!, items: [...curr.items, ...res.data!.items] },
				);
			})
			.catch(() => {})
			.finally(() => setInitLoading(false));
	};

	useEffect(() => {
		if (getDoctorsListLastProps) {
			getDoctors(1);
		}
	}, [selectedSpec]);

	useEffect(() => {
		if (!getDoctorsListLastProps) {
			dispatch(
				getSpecializationList({
					params: {
						pageNumber: 1,
						pageSize: 999999,
					},
				}),
			)
				.unwrap()
				.then((res) => {
					setSpecOptions(
						res.data!.items.map((o) => ({
							value: o.id,
							label: o.name,
						})),
					);
					getDoctors(1);
				})
				.catch(() => {})
				.finally(() => setInitLoading(false));
		}
	}, []);

	return (
		<MainSection contentWrapperClassName="flex-col" sectionClassName="bg-[#F6F5FA]">
			<div className="mb-[35px] flex w-full flex-row items-center justify-between">
				<MainSectionTitle title="Наши специалисты" />
				<CheckboxSelect
					value={selectedSpec}
					title="Специализация"
					searchable
					options={specOptions}
					isLoading={initLoading}
					onChange={(value) => setSelectedSpec(value as string)}
					variant="white"
				/>
			</div>
			<CardGrid
				items={doctors.items}
				maxSkeletonItemsCount={4}
				cachedLoading={true}
				className="min-h-[377px]"
				isLoading={doctorsListLoading}
				ItemComponent={DoctorsGridItem}
			/>
			{doctors.hasNextPage && !initLoading && (
				<Button
					variant="white"
					className="mt-[50px] self-center"
					disabled={doctorsListLoading}
					onClick={() => getDoctors(doctors.pageNumber + 1)}
				>
					Показать больше
				</Button>
			)}
		</MainSection>
	);
};
