// features/home/presentation/screens/stocks-detail-screen/index.tsx
import { HomeScreenWrapper } from '@features/home/presentation/components';
import { useParams } from 'react-router-dom';
import { mockNews } from './stocks.screen';

export default () => {
	const { id } = useParams<{ id: string }>();

	const stock = mockNews.find((item) => item.id === id);

	if (!stock) {
		return (
			<HomeScreenWrapper sliceNames={['stocksSlice']}>
				<div className="size-full flex-col items-center justify-center gap-[40px] p-8">
					<p className="text-center text-[24px] font-semibold">Акция не найдена</p>
				</div>
			</HomeScreenWrapper>
		);
	}

	return (
		<HomeScreenWrapper sliceNames={['stocksSlice']}>
			<div className="size-ful flex flex-col items-center justify-center gap-[40px] p-8">
				<div className="w-full max-w-4xl">
					<button
						onClick={() => window.history.back()}
						className="mb-6 text-primary2 hover:underline"
					>
						← Назад к акциям
					</button>

					<h1 className="mb-4 text-3xl font-bold">{stock.title}</h1>

					<p className="mb-6 text-primary2">{stock.date}</p>

					<div className="mb-8 h-[400px] w-full rounded-[20px] bg-black"></div>

					<div className="prose max-w-none">
						<p className="text-lg leading-relaxed">{stock.description}</p>
					</div>
				</div>
			</div>
		</HomeScreenWrapper>
	);
};
