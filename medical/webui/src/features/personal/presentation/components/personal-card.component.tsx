import {
	Button,
	HumanEntityCardEmpty,
	HumanEntityCardInfo,
	HumanEntityCardTitle,
	LoadingProccessBar,
} from '@core';
import { getPersonalById } from '@features/personal/services';
import type { Personal } from '@features/personal/types';
import { useAppDispatch, useSliceField } from '@store';
import { useEffect, useState } from 'react';

interface Props {
	personalId?: string;
	onEdit?: (id: string) => void;
	onDelete?: (id: string) => void;
}

export const PersonalCard = ({ personalId, onEdit, onDelete }: Props) => {
	const dispatch = useAppDispatch();
	const [personal, setPersonal] = useState<Personal | null>(null);
	const isLoading = useSliceField('personalSlice', 'loadings', 'getPersonalById');

	useEffect(() => {
		if (personalId) {
			dispatch(getPersonalById({ id: personalId }))
				.unwrap()
				.then((response) => {
					setPersonal(response.data || null);
				})
				.catch(() => {
					setPersonal(null);
				});
		} else {
			setPersonal(null);
		}
	}, [personalId]);

	if (isLoading) {
		return (
			<div className="flex h-full w-full max-w-[500px] flex-col items-center justify-center rounded-primary bg-white px-[40px] py-[25px]">
				<LoadingProccessBar bgClassName="w-full max-w-[300px]" />
			</div>
		);
	}

	return (
		<div className="flex h-full w-full max-w-[500px] flex-col items-center rounded-primary bg-white px-[40px] py-[25px]">
			{personal ? (
				<div className="flex h-full w-full flex-col items-center gap-[15px]">
					<div className="flex h-fit w-full flex-col items-center">
						<label className="cursor-pointer">
							<div className="flex size-[85px] items-center justify-center overflow-hidden rounded-full bg-primary">
								<img
									src={personal.photoUrl}
									alt="Фото"
									className="h-full w-full rounded-full object-cover"
								/>
							</div>
						</label>
					</div>
					<div className="flex size-full w-full flex-col items-center gap-[30px]">
						<div className="flex h-fit w-full flex-col items-center gap-[15px]">
							<HumanEntityCardTitle humanEntity={personal} />
							<p className="text-[20px] font-normal text-primary">
								{personal.speciality.name}
							</p>
						</div>

						<HumanEntityCardInfo humanEntity={personal} />
						<div className="mt-auto flex w-full justify-center gap-[20px]">
							<Button
								className="w-[140px]"
								onClick={() => personal.id && onEdit?.(personal.id)}
							>
								Редактировать
							</Button>
							<Button
								className="w-[140px] bg-red-500 text-white"
								onClick={() => personal.id && onDelete?.(personal.id)}
							>
								Удалить
							</Button>
						</div>
					</div>
				</div>
			) : (
				<HumanEntityCardEmpty />
			)}
		</div>
	);
};
