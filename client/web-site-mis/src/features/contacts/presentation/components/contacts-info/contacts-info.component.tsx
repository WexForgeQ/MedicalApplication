import { contactsInfoConfig } from '@features/contacts/constants';
import { ContactsInfoBlock } from './contacts-info-block.component';

export const ContactsInfo = () => {
	return (
		<div className="flex w-[499px] flex-col gap-[30px]">
			{contactsInfoConfig.map((block) => (
				<ContactsInfoBlock {...block} key={block.title} />
			))}
		</div>
	);
};
