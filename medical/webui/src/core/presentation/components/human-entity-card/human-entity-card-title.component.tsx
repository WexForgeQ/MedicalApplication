import type { HumanEntity } from '@core/types';

interface Props {
	humanEntity: HumanEntity;
	showDateOfBirth?: boolean;
}

export const HumanEntityCardTitle = ({ humanEntity, showDateOfBirth = true }: Props) => {
	return (
		<div className="flex h-fit w-full items-center justify-center gap-[21px]">
			<p className="text-[22px] font-semibold text-primaryDark">{humanEntity.fio}</p>
			{showDateOfBirth && (
				<p className="text-[14px] font-normal text-textGray">{humanEntity.dateOfBirth}</p>
			)}
		</div>
	);
};
