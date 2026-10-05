import { servicesListConfig } from '@features/services/constants';
import { MainServicesListItem } from './main-services-list-item.component';

interface MainServicesListProps {
	openedNumber: number;
}

export const MainServicesList = ({ openedNumber }: MainServicesListProps) => {
	return (
		<div className="flex flex-wrap gap-[20px]">
			{servicesListConfig.map((service, index) =>
				index <= openedNumber - 1 ? (
					<MainServicesListItem key={service.title} index={index} {...service} />
				) : null,
			)}
		</div>
	);
};
