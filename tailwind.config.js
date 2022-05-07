const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
        },
        colors: {
            white: {
                50: '#ffffff',
                100: '#f3f3f3'
            },
            black: {
                50: '#000000',
                100: '#151515'
            },
            purple: '#7936ae',
            blue: '#4575ae',
            gray: {
                50: '#f2f2f2',
                500: '#bebebe'
            }
        },
        extend: {}
    },
    plugins: []
};
