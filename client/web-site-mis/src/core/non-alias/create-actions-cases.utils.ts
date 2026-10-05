import type { SliceState, SliceStateAction } from '@core/types';
import type { ActionReducerMapBuilder } from '@reduxjs/toolkit';

export const createActionsCases = <T extends object, K extends string>(
	builder: ActionReducerMapBuilder<SliceState<T, K>>,
	actionsList: SliceStateAction<T, K, any>[],
) =>
	actionsList.forEach((item) =>
		builder.addCase(
			item.action,
			!!item.handler
				? item.handler
				: (state, action) => {
						(state.data as Record<keyof T, any>)[item.fieldName] = action.payload;
					},
		),
	);
