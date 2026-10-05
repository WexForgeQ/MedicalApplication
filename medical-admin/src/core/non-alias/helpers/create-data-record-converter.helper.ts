export const createDataRecordConverter = <
	ToServer extends Record<string | number, string | number>,
>(
	serverData: ToServer,
): {
	toClient: { [K in ToServer[keyof ToServer]]: keyof ToServer };
	toServer: ToServer;
} => {
	const reversed = {} as {
		[K in ToServer[keyof ToServer]]: keyof ToServer;
	};

	(Object.keys(serverData) as Array<keyof ToServer>).forEach((key) => {
		const value = serverData[key];
		reversed[value] = key;
	});

	return {
		toClient: reversed,
		toServer: serverData,
	};
};
