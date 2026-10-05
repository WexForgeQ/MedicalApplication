export const formatFIO = (fullFIO?: string): string => {
	if (!fullFIO) return '';

	const parts = fullFIO.trim().split(' ');
	if (parts.length === 0) return '';

	const lastName = parts[0];

	if (parts.length === 1) return lastName;

	const firstNameInitial = parts[1].charAt(0) + '.';

	if (parts.length === 2) return `${lastName} ${firstNameInitial}`;

	const patronymicInitial = parts[2].charAt(0) + '.';

	return `${lastName} ${firstNameInitial}${patronymicInitial}`;
};
