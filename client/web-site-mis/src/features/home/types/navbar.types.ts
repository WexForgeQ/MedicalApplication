export interface NavbarItemConfig {
	id: string;
	label: string;
	path: string;
	width?: number;
}

export interface NavbarConfig {
	basePath: string;
	items: NavbarItemConfig[];
}
