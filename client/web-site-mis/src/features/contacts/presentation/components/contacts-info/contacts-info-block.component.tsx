import {
	ContactsInfoBlockField,
	type ContactsInfoBlockFieldProps,
} from './contacts-info-block-field.component';

export interface ContactsInfoBlockProps {
	title: string;
	fields: ContactsInfoBlockFieldProps[];
}

export const ContactsInfoBlock = ({ title, fields }: ContactsInfoBlockProps) => {
	return (
		<div className="flex flex-col items-center gap-[10px]">
			<p className="text-[22px] font-medium leading-normal text-primary2">{title}</p>
			{fields.map((field) => (
				<ContactsInfoBlockField {...field} key={field.primaryText} />
			))}
		</div>
	);
};
