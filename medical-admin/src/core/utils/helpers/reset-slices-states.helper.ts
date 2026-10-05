import type { SliceCommon } from '@core/types';
import { type AppDispatch, selectorCache, sliceCommons } from '@store';

export const resetSlicesStates = (
	dispatch: AppDispatch,
	sliceNamesArray?: SliceCommon['sliceName'][],
) => {
	sliceCommons.forEach((slice) => {
		if (sliceNamesArray && sliceNamesArray.includes(slice.sliceName)) {
			dispatch(slice.reset());
		} else if (!sliceNamesArray) {
			dispatch(slice.reset());
		}
	});
	selectorCache.clear();
};
