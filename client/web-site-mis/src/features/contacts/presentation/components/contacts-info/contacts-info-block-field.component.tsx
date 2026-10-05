import { CopyIcon } from '@core';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContactsInfoBlockFieldClassNames {
	primaryTextClassName?: string;
	secondaryTextClassName?: string;
}

export interface ContactsInfoBlockFieldProps {
	primaryText: string;
	secondaryText?: string;
	copyAbility?: boolean;
	classNames?: ContactsInfoBlockFieldClassNames;
}

export const ContactsInfoBlockField = ({
	primaryText,
	copyAbility,
	secondaryText,
	classNames,
}: ContactsInfoBlockFieldProps) => {
	const timeout = useRef<NodeJS.Timeout | null>(null);
	const [copied, setCopied] = useState<boolean>(false);

	const clearCopyStateTimeout = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
	};

	const onCopyClick = () => {
		if (copied) return;
		navigator.clipboard.writeText(primaryText);
		setCopied(true);
		timeout.current = setTimeout(() => setCopied(false), 200);
	};

	useEffect(() => {
		return () => {
			clearCopyStateTimeout();
		};
	}, []);

	return (
		<div className="flex h-[50px] w-full flex-row items-center justify-between rounded-[20px] bg-[#F6F5FA] px-[20px]">
			<p
				className={twMerge(
					'text-[18px] leading-[1.35] tracking-[0.18px] text-primary',
					classNames?.primaryTextClassName,
				)}
			>
				{primaryText}
			</p>
			{secondaryText && (
				<p
					className={twMerge(
						'text-[18px] leading-[1.35] tracking-[0.18px] text-primary',
						classNames?.secondaryTextClassName,
					)}
				>
					{secondaryText}
				</p>
			)}
			{copyAbility && (
				<CopyIcon
					className={twMerge(
						'cursor-pointer text-primary2',
						copied && 'animate-lightShake cursor-default text-primary2/80',
					)}
					onClick={onCopyClick}
				/>
			)}
		</div>
	);
};
