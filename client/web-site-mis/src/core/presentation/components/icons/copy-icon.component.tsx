import type { AppIconProps } from '@core/types';

export const CopyIcon = (props: AppIconProps) => {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M13.375 4.625C13.375 2.98126 13.375 2.15939 12.921 1.60621C12.8379 1.50495 12.7451 1.41209 12.6438 1.32898C12.0906 0.875 11.2687 0.875 9.625 0.875H4.875C2.98938 0.875 2.04657 0.875 1.46079 1.46079C0.875 2.04657 0.875 2.98938 0.875 4.875V9.625C0.875 11.2687 0.875 12.0906 1.32898 12.6438C1.41209 12.7451 1.50495 12.8379 1.60621 12.921C2.15939 13.375 2.98126 13.375 4.625 13.375"
				stroke="currentColor"
				strokeWidth="1.75"
			/>
			<rect
				x="8.375"
				y="8.375"
				width="12.5"
				height="12.5"
				rx="2"
				stroke="currentColor"
				strokeWidth="1.75"
			/>
		</svg>
	);
};
