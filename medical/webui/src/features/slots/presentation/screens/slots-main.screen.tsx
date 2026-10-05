import { useSearchParams } from 'react-router-dom';
import { SlotCard, SlotsMainHeader } from '../components';
import ScheduleTable from '../components/slots-schedule-grid.component';

export default () => {
	const [search] = useSearchParams();
	const slotId = search.get('slotId');
	const appointmentMode = search.get('appointmentMode');

	return (
		<div className="flex size-full flex-col gap-[40px] overflow-auto py-[10px] pb-[40px] pl-[60px] pr-[40px]">
			<SlotsMainHeader />
			<div className="flex size-full gap-[50px] overflow-auto">
				<ScheduleTable />

				{slotId && <SlotCard slotId={slotId} appointmentMode={!!appointmentMode} />}
			</div>
		</div>
	);
};
