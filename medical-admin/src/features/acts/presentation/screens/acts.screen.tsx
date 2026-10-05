import { useSliceField } from '@store';
import { ActsHeader, ActsTableWrapper } from '../components';

export default () => {
	const isTableLoading = useSliceField('actsSlice', 'loadings', 'getActs');

	return (
		<div className="flex size-full flex-col gap-[40px] overflow-auto py-[10px] pb-[40px] pl-[10px] pr-[10px]">
			<ActsHeader isLoading={isTableLoading} />
			<div className="flex size-full gap-[50px] overflow-auto">
				<ActsTableWrapper />
			</div>
		</div>
	);
};
