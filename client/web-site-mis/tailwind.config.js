const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}', './public/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
			},
			colors: {
				primary: '#114878',
				primary2: '#6EA4BD',
				text: '#383838',
				noActive: '#B6B6B6',
				textGray: '#737373',
				error: '#E71D36'
			},
			keyframes: {
				loaderProcessBar: {
					'0%': { left: '-100%', },
					'100%': { left: '100%', },
				},
				fadeIn: {
					'0%': { opacity: '0', },
					'100%': { opacity: '1', },
				},
				popIn: {
					'0%': { transform: 'scale(0.5)', opacity: '0' },
					'50%': { transform: 'scale(1.05)', opacity: '0.5' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				lightShake: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(2px)' },
					'100%': { transform: 'translateY(0px)' },
				}
			},
			animation: {
				loaderProcessBar: 'loaderProcessBar 1.5s linear infinite',
				fadeIn: 'fadeIn 0.3s ease-in-out forwards',
				popIn: 'popIn 0.2s ease-in-out',
				lightShake: 'lightShake 0.2s ease-in-out forwards'
			},
		},
		screens: {
			xl: '1920px'
		}
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		plugin(function ({ addUtilities }) {
			addUtilities({
			});
		}),
	],
};
