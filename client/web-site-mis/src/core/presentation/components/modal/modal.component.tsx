import { twMerge } from 'tailwind-merge';
import { CrossIcon } from '../icons';

interface ModalProps {
	close?: () => void;
	children: React.ReactNode;
	wrapperClassName?: string;
}

export const Modal = ({ children, close, wrapperClassName }: ModalProps) => {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
			<div
				className={twMerge(
					'flex animate-popIn flex-col rounded-[40px] bg-[#FAFAFA]',
					wrapperClassName,
				)}
			>
				{!!close && (
					<div className="flex w-full justify-end pr-[15px] pt-[15px]">
						<button
							className="flex size-[40px] items-center justify-center rounded-full border-none bg-primary2 outline-none hover:bg-primary2/90"
							onClick={close}
						>
							<CrossIcon className="size-[20px] text-white" />
						</button>
					</div>
				)}
				{children}
			</div>
		</div>
	);
};
