import type { HumanEntity } from '@core/types';
import { GeolocationIcon, MailIcon, PhoneIcon } from '../icons';

interface Props {
	humanEntity: HumanEntity;
	showAdress?: boolean;
}

export const HumanEntityCardInfo = ({ humanEntity, showAdress = true }: Props) => {
	return (
		<div className="flex h-fit w-full flex-col gap-[15px]">
			<p className="text-[18px] font-semibold text-primary">Информация</p>
			<div className="flex w-full items-center gap-[10px] text-textGray">
				<MailIcon />
				<p className="text-[16px] font-normal">{humanEntity.email}</p>
			</div>
			<div className="flex w-full items-center gap-[10px] text-textGray">
				<PhoneIcon />
				<p className="text-[16px] font-normal">{humanEntity.phoneNumber}</p>
			</div>
			{showAdress && (
				<div className="flex w-full items-center gap-[10px] text-textGray">
					<GeolocationIcon />
					<p className="text-[16px] font-normal">{humanEntity.livingAdress}</p>
				</div>
			)}
		</div>
	);
};
