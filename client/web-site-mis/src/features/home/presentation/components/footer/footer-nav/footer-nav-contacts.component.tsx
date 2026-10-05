import { ContactsIcon } from '@core';

export const FooterNavContacts = () => {
	return (
		<div className="flex flex-row items-center gap-[15px]">
			<div className="flex size-[50px] items-center justify-center rounded-full bg-white">
				<ContactsIcon className="text-primary" />
			</div>
			<div className="flex flex-col">
				<p className="text-[18px] font-bold leading-[1.389] text-white">
					+375(29) 121-12-12
				</p>
				<p className="text-[18px] font-bold leading-[1.389] text-white">
					+375(33) 515-15-15
				</p>
			</div>
		</div>
	);
};
