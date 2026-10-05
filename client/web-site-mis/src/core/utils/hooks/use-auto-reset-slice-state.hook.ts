import type { SliceCommon } from '@core/types';
import { useAppDispatch } from '@store';
import { useLayoutEffect, useState } from 'react';
import { resetSlicesStates } from '../helpers';

export const useAutoResetSliceState = (sliceNames: SliceCommon['sliceName'][]) => {
	const [resetIsDone, setResetIsDone] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		resetSlicesStates(dispatch, sliceNames);
		setResetIsDone(true);
		return () => {
			resetSlicesStates(dispatch, sliceNames);
		};
	}, []);

	return resetIsDone;
};
