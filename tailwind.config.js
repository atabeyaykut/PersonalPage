module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            zIndex: {
                '100': '100',
            },
            colors: {
                primary: '#00abf0',
                dark: '#001c2a',
            }
        },
    },
    plugins: [],
} 