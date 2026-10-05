import { sidebarConfig } from '@features/home/constants';
import { setIsSidebarOpen } from '@features/home/store';
import { useAppDispatch, useSliceField } from '@store';
import { twMerge } from 'tailwind-merge';
import { SidebarItem } from './sidebar-item.component';
import { SidebarTitle } from './sidebar-title.component';

export const Sidebar = () => {
	const isSidebarOpen = useSliceField('homeSlice', 'data', 'isSidebarOpen');
	const dispatch = useAppDispatch();

	return (
		<div
			className={twMerge(
				'flex h-full flex-col bg-white pt-[33px]',
				isSidebarOpen ? 'w-[224px] gap-[34px]' : 'w-[80px] gap-[10px]',
			)}
		>
			<SidebarTitle
				onClick={() => dispatch(setIsSidebarOpen(!isSidebarOpen))}
				isSidebarOpen={isSidebarOpen}
			/>
			<div className="flex w-full flex-col items-start">
				{sidebarConfig.items.map((item) => (
					<SidebarItem
						{...item}
						isSidebarOpen={isSidebarOpen}
						path={`${sidebarConfig.basePath}/${item.path}`}
						key={item.id}
					/>
				))}
			</div>
		</div>
	);
};
