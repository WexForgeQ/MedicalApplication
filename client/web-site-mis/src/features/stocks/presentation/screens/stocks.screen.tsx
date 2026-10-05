import { NavLinkArrow } from '@core';
import { HomeScreenWrapper } from '@features/home/presentation/components';

type News = {
	id: string;
	title: string;
	description: string;
	date: string;
};

export const mockNews: News[] = [
	{
		id: '1',
		title: 'Запуск нового сервиса онлайн-записи',
		description:
			'Мы запустили удобный сервис онлайн-записи на прием. Теперь вы можете записаться к врачу в любое время суток.',
		date: '2024-01-15',
	},
	{
		id: '2',
		title: 'Новое оборудование в клинике',
		description:
			'В нашу клинику поступило современное оборудование для диагностики и лечения. Это повысит качество оказываемых услуг.',
		date: '2024-01-10',
	},
	{
		id: '3',
		title: 'Акция на плановые осмотры',
		description: 'Скидка 20% на все плановые осмотры в течение января. Успейте записаться!',
		date: '2024-01-05',
	},
	{
		id: '4',
		title: 'Новый специалист в команде',
		description: 'К нашей команде присоединился опытный кардиолог с 15-летним стажем работы.',
		date: '2024-01-01',
	},
	{
		id: '5',
		title: 'Изменение графика работы',
		description:
			'С февраля клиника будет работать по новому графику. Подробности на нашем сайте.',
		date: '2023-12-28',
	},
];

export default () => {
	return (
		<HomeScreenWrapper sliceNames={['stocksSlice']}>
			<div className="size-full flex-col items-center justify-center gap-[40px]">
				<p className="text-center text-[24px] font-semibold">Акции</p>
				<div className="flex size-full flex-wrap justify-center gap-[40px] py-[40px]">
					{mockNews.map((stock) => {
						return (
							<div className="flex h-[300px] w-[360px] flex-col gap-[10px] rounded-[20px] border p-[10px]">
								<div className="min-h-[150px] w-full rounded-t-[20px] bg-black"></div>
								<p className="fron-semibold h-full text-primary2">{stock.title}</p>
								<p
									title={stock.description}
									className="fron-semibold h-full truncate text-black"
								>
									{stock.description}
								</p>
								<div className="flex h-fit w-full justify-between">
									<p className="text-primary2">{stock.date}</p>
									<NavLinkArrow to={stock.id} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</HomeScreenWrapper>
	);
};
