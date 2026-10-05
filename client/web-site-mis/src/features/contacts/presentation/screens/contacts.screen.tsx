import { ContactsInfo, ContactsMap } from '../components';

export default () => {
	return (
		<main className="flex w-full flex-col items-center gap-[69px]">
			<p className="text-[24px] font-semibold leading-normal text-text">Контакты</p>
			<div className="flex flex-row items-end justify-center gap-[100px] pb-[79px]">
				<ContactsInfo />
				<ContactsMap />
			</div>
		</main>
	);
};
