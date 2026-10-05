import { useSliceField } from '@store';
import { ChecksHeader, ChecksTableWrapper } from '../components';

export default () => {
	const isTableLoading = useSliceField('checksSlice', 'loadings', 'getChecks');

	return (
		<div className="flex size-full flex-col gap-[40px] overflow-auto py-[10px] pb-[40px] pl-[10px] pr-[10px]">
			<ChecksHeader isLoading={isTableLoading} />
			<div className="flex size-full gap-[50px] overflow-auto">
				<ChecksTableWrapper />
			</div>
		</div>
	);
};

