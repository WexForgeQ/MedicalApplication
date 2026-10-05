import { memo } from 'react';

interface PaginationInfoProps {
	current: number;
	total: number;
}

export const PaginationInfo = memo(({ current, total }: PaginationInfoProps) => {
	return (
		<p className="[font-feature-settings:'liga'_off,'clig'_off'] text-[14px] leading-[1.42857] tracking-[0.1px] text-primary">
			{`${current} из ${total}`}
		</p>
	);
});
