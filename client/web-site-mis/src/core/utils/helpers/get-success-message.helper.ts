export const getSuccessMessage = (options: { message?: string; fetchName?: string }) => {
	return `${!!options?.fetchName ? `[${options?.fetchName}]: ` : ''}${options?.message ?? 'Успешно'}`;
};
