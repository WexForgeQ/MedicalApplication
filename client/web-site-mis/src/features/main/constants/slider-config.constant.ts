import { APP_ROUTES } from '@core/constants';
import { HOME_ROUTES } from '@features/home/constants';
import { sliderSrc1, sliderSrc2, sliderSrc3 } from '../assets';
import type { MainSliderConfig } from '../types';

export const mainSliderConfig: MainSliderConfig = [
	{
		bgImgSrc: sliderSrc1,
		position: 'left',
		content: {
			title: 'Ваш семейный медицинский центр',
			text: 'Мы предлагаем полный спектр медицинских услуг: от патронажа новорожденных до программ активного долголетия',
			link: {
				text: 'Запись онлайн',
				to: `${APP_ROUTES.home.path}${HOME_ROUTES.appointment.path}`,
			},
		},
	},
	{
		bgImgSrc: sliderSrc2,
		position: 'right',
		content: {
			title: 'Комплексные программы для него и для неё',
			text: 'Современная диагностика, консультации профильных специалистов и четкие рекомендации — инвестируйте в свое здоровье осознанно',
			link: {
				text: 'Запись онлайн',
				to: `${APP_ROUTES.home.path}${HOME_ROUTES.appointment.path}`,
			},
		},
	},
	{
		bgImgSrc: sliderSrc3,
		position: 'left',
		content: {
			title: 'Новое приложение  DevMed ',
			text: 'Самостоятельная запись на прием, просмотр результатов анализов, рекомендации после посещений и многое другое',
			link: {
				text: 'Установить',
				to: `/*`,
			},
		},
	},
];
