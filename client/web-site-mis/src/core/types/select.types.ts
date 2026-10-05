export interface SelectOption {
	value: string;
	label: string;
}

export type SelectValue = SelectOption['value'] | SelectOption['value'][];

export type SelectVariants = 'white' | 'gray';
