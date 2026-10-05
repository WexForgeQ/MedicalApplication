import { memo } from 'react';
import { PaginationStubIcon } from '../icons';

interface PaginationStubProps {
	onClick: () => void;
}

export const PaginationStub = memo(({ onClick }: PaginationStubProps) => {
	return (
		<div
			className="flex size-[32px] cursor-pointer items-center justify-center rounded-[8px] text-primary hover:border hover:border-primary hover:text-text"
			onClick={onClick}
		>
			<PaginationStubIcon className="h-[4px] w-[18px]" />
		</div>
	);
});
