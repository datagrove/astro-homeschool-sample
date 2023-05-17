/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dgPrimary: "#435E1C",
				dgSecondary: "#245881",
				accent: "#812458",
				dgPrimaryDM: "#73A92F",
				dgSecondaryDM: "#F5F5F5",
				accentDM: "#2FA9A2",
				cardBackgroundDM: "#2F2F2F",
				dgTextPrimary: "#BFD39B"
			},
			backgroundImage: {
				'feature-img': "url('/images/3dprinter.jpg')"
			}
		},
	},
	plugins: [],
}
