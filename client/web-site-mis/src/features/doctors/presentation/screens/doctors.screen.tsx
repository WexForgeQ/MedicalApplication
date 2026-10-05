import { LoadingProccessBar } from '@core';
import { defPaginatedData } from '@core/constants';
import { SortOrder, type NestedKeyOf, type PaginatedData, type SelectOption } from '@core/types';
import { getDoctorsList, getSpecializationList } from '@features/doctors/store';
import type { Doctor } from '@features/doctors/types';
import { HomeScreenWrapper } from '@features/home/presentation/components';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useLayoutEffect, useState } from 'react';
import { DoctorsContent, DoctorsTop } from '../components';

interface FetchParams {
	specId: string;
	ordering: string;
}

export default () => {
	const [specListOptions, setSpecListOptions] = useState<SelectOption[]>([]);
	const [params, setParams] = useState<FetchParams>({
		specId: '',
		ordering: '',
	});
	const [doctors, setDoctors] = useState<PaginatedData<Doctor>>(defPaginatedData);
	const specializationListLoading = useSliceField(
		'doctorsSlice',
		'loadings',
		'getSpecializationList',
	);

	const doctorsListLoading = useSliceField('doctorsSlice', 'loadings', 'getDoctorsList');

	const dispatch = useAppDispatch();

	const getDoctors = (pN: number) => {
		dispatch(
			getDoctorsList({
				params: {
					pageNumber: pN,
					pageSize: 12,
					ordering:
						params.ordering.length > 0
							? {
									ordering: params.ordering as NestedKeyOf<Doctor>,
									sortOrder: SortOrder.Asc,
								}
							: undefined,
					filters: {
						specializationId: params.specId.length > 0 ? params.specId : undefined,
					},
				},
			}),
		)
			.unwrap()
			.then((res) => setDoctors(res.data!))
			.catch(() => {});
	};

	useLayoutEffect(() => {
		dispatch(
			getSpecializationList({
				params: {
					pageNumber: 1,
					pageSize: 999999,
				},
			}),
		)
			.unwrap()
			.then((res) =>
				setSpecListOptions(res.data!.items.map((o) => ({ label: o.name, value: o.id }))),
			)
			.catch(() => {});
	}, []);

	useEffect(() => {
		getDoctors(1);
	}, [params.ordering, params.specId]);

	return (
		<HomeScreenWrapper sliceNames={['doctorsSlice', 'servicesSlice']}>
			{specializationListLoading ? (
				<main className="flex flex-1 items-center justify-center">
					<LoadingProccessBar />
				</main>
			) : (
				<main className="flex w-full flex-col items-center gap-[50px] pb-[60px]">
					<DoctorsTop
						specSelect={{
							value: params.specId,
							onChange: (value) => setParams((curr) => ({ ...curr, specId: value })),
							options: specListOptions,
						}}
						orderingSelect={{
							value: params.ordering,
							onChange: (value) =>
								setParams((curr) => ({ ...curr, ordering: value })),
						}}
					/>
					<DoctorsContent
						doctors={doctors}
						isLoading={doctorsListLoading}
						getDoctors={getDoctors}
					/>
				</main>
			)}
		</HomeScreenWrapper>
	);
};
