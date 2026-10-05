import { LoadingProccessBar } from '../loaders';

export const ModalLoadingFallback = () => {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
			<div className="flex h-[500px] w-[1180px] animate-popIn items-center justify-center rounded-[40px] bg-[#FAFAFA]">
				<LoadingProccessBar bgClassName="w-[500px]" />
			</div>
		</div>
	);
};
