/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'~/components/**/*.{vue,js}',
		'~/layouts/**/*.vue',
		'~/pages/**/*.vue',
		'~/plugins/**/*.{js,ts}',
		'~/nuxt.config.{js,ts}',
		'~/app.vue',
	],
	theme: {
		extend: {
			colors: {
				primary: '#E2E8F0',
				secondary: '#111827',
				tertiary: '#252525',
				'custom-gray': '#F2F2F2',
			},
		},
	},
}
