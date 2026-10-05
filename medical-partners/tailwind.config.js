const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}', './public/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
			},
			colors: {
				primary: '#114878',
				primaryDark: '#030229',
				textGray: '#737373',
				bgGray: '#FAFAFB',
				error: '#E71D36',
			},
			borderRadius: {
				primary: '10px',
			},
			keyframes: {
				loaderProcessBar: {
					'0%': { left: '-100%' },
					'100%': { left: '100%' },
				},
				logoPulse: {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '0.8' },
				},
			},
			animation: {
				loaderProcessBar: 'loaderProcessBar 1.5s linear infinite',
				logoPulse: 'logoPulse 2s ease-in-out infinite',
			},
		},
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.scrollbar-custom': {
					'&::-webkit-scrollbar': {
						width: '8px',
						height: '8px',
					},
					'&::-webkit-scrollbar-track': {
						background: 'transparent',
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: '#114878',
						borderRadius: '10px',
					},
					'&::-webkit-scrollbar-thumb:hover': {
						backgroundColor: '#030229',
					},
				},
			});
		}),
	],
};
