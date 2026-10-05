import { LoadingProccessBar } from '@core';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const ContactsMap = () => {
	const [loading, setLoading] = useState<boolean>(true);

	return (
		<div className="relative flex h-[440px] w-[580px] items-center justify-center rounded-[20px] bg-[#F6F5FA]">
			{loading && <LoadingProccessBar />}
			<iframe
				src="https://yandex.ru/map-widget/v1/?um=constructor%3A9a5e907efb53982d317fd64d7313f1e2910c68c8143a691e056d29566da3b83d&amp;source=constructor"
				className={twMerge(
					'absolute left-0 right-0 size-full rounded-[20px]',
					loading && 'hidden',
				)}
				onLoad={() => setLoading(false)}
			></iframe>
		</div>
	);
};
