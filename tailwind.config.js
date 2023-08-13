/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    plugins: [require('@tailwindcss/aspect-ratio'), require('tailwind-scrollbar-hide')],
    theme: {
        extend: {
            backgroundImage: {
                landing: "url('/landing.jpg')",
                'mixed-art': "url('/mixed-art.jpg')",
                photography: "url('/photography.jpg')",
            },
            fontSize: {
                xs: '.65rem',
            },
        },
    },
    variants: {
        extend: {},
    },
};
