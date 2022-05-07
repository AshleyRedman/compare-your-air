const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        // https://fonts.google.com/specimen/Open+Sans
        fontFamily: {
            sans: ['Archivo', ...defaultTheme.fontFamily.sans]
        },
        // Obtained via Mac app 'Sip' color picker
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
            gray: '#bebebe'
        },
        extend: {}
    },
    plugins: []
};
