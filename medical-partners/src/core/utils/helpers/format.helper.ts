import { format as formatFns, type FormatOptions } from 'date-fns';
import { ru } from 'date-fns/locale';

export const format = <DateType extends Date>(
	date: DateType | number | string,
	formatStr: string,
	options?: FormatOptions,
): string => {
	return formatFns(date, formatStr, { locale: ru, ...options });
};
