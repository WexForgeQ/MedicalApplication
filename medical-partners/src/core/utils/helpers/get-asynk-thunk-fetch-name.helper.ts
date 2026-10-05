export const getAsyncThunkFetchName = <ThunkProps extends undefined | void | object>(values: {
	fetchName?: string;
	propsFieldName?: keyof ThunkProps;
	metaArg: ThunkProps;
}) => {
	if (!values.fetchName) {
		return undefined;
	}
	return `${values.fetchName}${!!values.propsFieldName && !!values.metaArg && typeof values.metaArg === 'object' && Object.keys(values.metaArg).length > 0 ? ` | ${(values.metaArg as any)[values.propsFieldName]}` : ''}`;
};
