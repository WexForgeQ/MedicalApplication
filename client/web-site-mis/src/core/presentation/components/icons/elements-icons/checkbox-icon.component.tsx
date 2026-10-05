import type { AppIconProps } from '@core/types';

export const CheckboxIcon = (props: AppIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="13"
			viewBox="0 0 14 13"
			fill="none"
			{...props}
		>
			<path
				d="M1.00195 9.0012L3.89073 11.3483C4.33015 11.7053 4.97807 11.6267 5.3193 11.1749L13.0039 1"
				stroke="#F6F5FA"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
};
