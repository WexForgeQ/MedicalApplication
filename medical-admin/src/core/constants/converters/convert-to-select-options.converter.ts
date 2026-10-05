export const convertToSelectValues = (data?: Array<object>) => {
	if (!data) return null;
	return data.map((el) => {
		const obj = el as {
			name: string;
			id: string;
			title: string;
			username: string;
			firstName: string;
			lastName: string;
			middleName: string;
			fio: string;
		};
		const fullName =
			!!obj.firstName?.length && !!obj.lastName?.length
				? `${obj.lastName} ${obj.firstName.charAt(0)}.${
						obj.middleName?.length ? obj.middleName.charAt(0) + '.' : ''
					}`
				: '';
		return {
			label:
				(obj.username ?? obj.fio)
					? `${obj.fio.split(' ')[0]} ${obj.fio.split(' ')[1][0]}.${obj.fio.split(' ')[2][0]}.`
					: (obj.name ?? obj.title ?? fullName ?? ''),
			value: obj.id!,
		};
	});
};
