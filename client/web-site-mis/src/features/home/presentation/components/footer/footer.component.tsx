import { FooterNav } from './footer-nav';
import { FooterPolitics } from './footer-politics.component';

export const Footer = () => {
	return (
		<footer className="flex w-full justify-center bg-primary pb-[50px] pt-[54px]">
			<div className="flex flex-col items-start">
				<FooterNav />
				<FooterPolitics />
				<p className="text-[18px] font-bold leading-none text-white">© DevMed 2025</p>
			</div>
		</footer>
	);
};
