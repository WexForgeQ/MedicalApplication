import { CheckboxSelect } from '@core';
import type { SelectOption } from '@core/types';
import { doctorsOrderingSelectOptions } from '@features/doctors/constants';

interface SelectProps {
	onChange: (value: string) => void;
	value: string;
}

interface SpecSelectProps extends SelectProps {
	options: SelectOption[];
}

interface DoctorsTopProps {
	specSelect: SpecSelectProps;
	orderingSelect: SelectProps;
}

export const DoctorsTop = ({ specSelect, orderingSelect }: DoctorsTopProps) => {
	return (
		<section className="flex w-full flex-col items-center gap-[50px]">
			<p className="text-[24px] font-semibold leading-normal text-text">Врачи</p>
			<div className="flex gap-[40px]">
				{specSelect.options.length > 0 && (
					<CheckboxSelect
						title="Специализация"
						searchable
						options={specSelect.options}
						value={specSelect.value}
						onChange={(value) => specSelect.onChange(value as string)}
						variant={'gray'}
					/>
				)}
				<CheckboxSelect
					title="Сортировка"
					options={doctorsOrderingSelectOptions}
					value={orderingSelect.value}
					onChange={(value) => orderingSelect.onChange(value as string)}
					variant={'gray'}
				/>
			</div>
		</section>
	);
};
