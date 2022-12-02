const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Quicksand"', 'sans-serif'],
				head: ['"Montserrat"', 'sans-serif'],
			},
			colors: {
				danger: '#df2d03',
				warning: '#eebb08',
				success: '#03b54a',
				theme: '#00d1ae',
				light: '#cbcbcb',
				dark: '#131313',
				darkOne: '#1a1a1a',
			},
			fontWeight: {
				normal: 400,
				semibold: 500,
				bold: 600,
				extrabold: 700,
			},
			animation: {
				sPulse: 'sPulse 1s cubic-bezier(0.24, 0, 0.38, 1) infinite',
			},
			keyframes: {
				sPulse: {
					'0%': { opacity: 1, transform: 'scale(1)' },
					'50%': { opacity: 0, transform: 'scale(1.5)' },
					'100%': { opacity: 0, transform: 'scale(1.5)' },
				},
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
		screens: {
			xxs: '370px',
			xs: '480px',
			sm: '576px',
			md: '767px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		plugin(function ({ addBase, theme, addComponents }) {
			addBase({
				h1: {
					fontFamily: theme('fontFamily.head'),
					fontWeight: theme('fontWeight.extrabold'),
					fontSize: theme('fontSize.4xl'),
					lineHeight: theme('leading.normal'),
				},
				h2: {
					fontFamily: theme('fontFamily.head'),
					fontWeight: theme('fontWeight.extrabold'),
					fontSize: theme('fontSize.3xl'),
					lineHeight: theme('leading.normal'),
				},
				h3: {
					fontFamily: theme('fontFamily.head'),
					fontWeight: theme('fontWeight.extrabold'),
					fontSize: theme('fontSize.2xl'),
					lineHeight: theme('leading.normal'),
				},
				h4: {
					fontFamily: theme('fontFamily.head'),
					fontWeight: theme('fontWeight.extrabold'),
					fontSize: theme('fontSize.xl'),
					lineHeight: theme('leading.normal'),
				},
				h5: {
					fontFamily: theme('fontFamily.head'),
					fontWeight: theme('fontWeight.extrabold'),
					fontSize: theme('fontSize.lg'),
					lineHeight: theme('leading.normal'),
				},
				h6: {
					fontFamily: theme('fontFamily.head'),
					fontWeight: theme('fontWeight.extrabold'),
					fontSize: theme('fontSize.md'),
					lineHeight: theme('leading.normal'),
				},
				p: {
					fontFamily: theme('fontFamily.sans'),
					fontWeight: theme('fontWeight.normal'),
					fontSize: theme('fontSize.sm'),
				},
			});
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen xxs': {
						maxWidth: '95%',
					},
					'@screen xs': {
						maxWidth: '95%',
					},
					'@screen sm': {
						maxWidth: '95%',
					},
					'@screen md': {
						maxWidth: '95%',
					},
					'@screen lg': {
						maxWidth: '90%',
					},
					'@screen xl': {
						maxWidth: '90%',
					},
					'@screen xxl': {
						maxWidth: '95%',
					},
				},
			});
		}),
	],
};
