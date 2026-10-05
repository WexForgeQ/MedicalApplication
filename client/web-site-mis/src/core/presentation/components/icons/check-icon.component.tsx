import type { AppIconProps } from '@core/types';

export const CheckIcon = (props: AppIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="none"
			{...props}
		>
			<path
				d="M12.5 21.875C14.669 21.875 16.7708 21.1229 18.4474 19.747C20.1241 18.371 21.2717 16.4563 21.6949 14.329C22.118 12.2017 21.7905 9.99351 20.768 8.08066C19.7456 6.16781 18.0915 4.66865 16.0877 3.83863C14.0838 3.00861 11.8541 2.89907 9.77858 3.52868C7.70302 4.1583 5.90998 5.48811 4.70497 7.29153C3.49997 9.09495 2.95755 11.2604 3.17014 13.4189C3.38274 15.5774 4.33719 17.5954 5.87087 19.1291"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M16.6641 10.418L12.8578 14.9855C12.2022 15.7722 11.8744 16.1655 11.4338 16.1855C10.9933 16.2055 10.6312 15.8435 9.90712 15.1194L8.33073 13.543"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
};
