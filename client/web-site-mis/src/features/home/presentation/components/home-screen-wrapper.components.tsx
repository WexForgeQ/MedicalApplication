import { LoadingProccessBar } from '@core';
import type { SliceCommon } from '@core/types';
import { useAutoResetSliceState } from '@core/utils';

interface HomeScreenWrapperProps {
	sliceNames: SliceCommon['sliceName'][];
	children: React.ReactNode;
}

export const HomeScreenWrapper = ({ sliceNames, children }: HomeScreenWrapperProps) => {
	const isDone = useAutoResetSliceState(sliceNames);

	return isDone ? (
		children
	) : (
		<div className="flex flex-1 items-center justify-center">
			<LoadingProccessBar />
		</div>
	);
};
