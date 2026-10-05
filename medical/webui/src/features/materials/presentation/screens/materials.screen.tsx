import { MaterialsHeader } from '../components';
import { MaterialsTableWrapper } from '../components/materials-table-wrapper.component';

export default () => {
	return (
		<div className="flex size-full flex-col gap-[40px] py-[10px] pb-[40px] pl-[60px] pr-[40px]">
			<MaterialsHeader isLoading={false} />
			<div className="flex size-full gap-[50px]">
				<MaterialsTableWrapper />
			</div>
		</div>
	);
};
