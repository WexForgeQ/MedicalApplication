import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxIcon } from '../icons';

interface CheckboxProps {
	value: boolean;
	id?: string;
	onChange?: (value: boolean) => void;
	className?: string;
	iconClassName?: string;
	checkedClassName?: string;
}

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
	({ value, onChange, className, iconClassName, checkedClassName, id }, ref) => {
		return (
			<div
				ref={ref}
				className={twMerge(
					'flex size-[20px] cursor-pointer items-center justify-center rounded-[5px] border-[1.5px] border-primary2 bg-white',
					value && (checkedClassName ?? 'bg-primary2'),
					className,
				)}
				onClick={() => !!onChange && onChange(!value)}
			>
				<CheckboxIcon className={twMerge('h-[12px] w-[11px]', iconClassName)} />
				<input
					type="checkbox"
					id={id}
					className="hidden"
					value={value ? 'value' : undefined}
					onChange={() => !!onChange && onChange(!value)}
				/>
			</div>
		);
	},
);
