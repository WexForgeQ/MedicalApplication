import type { ThunkPayloadAPIError } from '@core/types';
import { symbolsTruncate } from './symbols-truncate.helper';

const connectionErrors: Record<string, string> = {
	ECONNABORTED: 'Превышено время ожидания ответа от сервера',
	ENOTFOUND: 'Сервер не найден. Обратитесь к администратору',
	EAI_AGAIN: 'Проблема с DNS. Обратитесь к администратору',
};

const isNetworkError = (error: ThunkPayloadAPIError, status: number): string | undefined => {
	if (error.message === 'Network Error' || status === 502)
		return 'Ошибка подключения к серверу. Обратитесь к администратору';
	if (!!connectionErrors[error.code]) return connectionErrors[error.code];
	return undefined;
};

export const getErrorMessage = (
	error: ThunkPayloadAPIError | null,
	status: number,
	fetchName?: string,
): string => {
	if (!error) {
		return 'Неизвестная ошибка';
	} else {
		const networkError = isNetworkError(error, status);
		const errorMessage = !!networkError
			? networkError
			: error.message.length > 0
				? symbolsTruncate(error.message, 400)
				: status === 403
					? 'Доступ запрещен'
					: undefined;
		return `${!!fetchName ? `[${fetchName}]\n` : ''}Ошибка: ${errorMessage ?? 'Неизвестно'}${!!errorMessage ? '' : `\nКод ошибки: ${error.code.length > 0 ? error.code : 'Неизвестен'}\nHTTP-Статус:${status === -1 ? 'Неизвестен' : status}`}`;
	}
};
