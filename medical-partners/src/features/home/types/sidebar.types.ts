import type { AppIconProps } from '@core/types';

export interface SidebarItemConfig {
	id: string;
	Icon: (props: AppIconProps) => React.JSX.Element;
	label: string;
	path: string;
}

export interface SidebarConfig {
	basePath: string;
	items: SidebarItemConfig[];
}
