import { navbarConfig } from '@features/home/constants';
import { NavbarLogo } from '../../navbar-logo.component';
import { FooterNavContacts } from './footer-nav-contacts.component';
import { FooterNavItem } from './footer-nav-item.component';

export const FooterNav = () => {
	return (
		<div className="flex flex-row items-center">
			<NavbarLogo className="text-white" />
			<div className="ml-[174px] mr-[96px] flex flex-row items-center gap-[30px]">
				{navbarConfig.items.map((item) => (
					<FooterNavItem
						{...item}
						path={`${navbarConfig.basePath}/${item.path}`}
						key={item.id}
					/>
				))}
			</div>
			<FooterNavContacts />
		</div>
	);
};
