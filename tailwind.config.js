/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            margin: {
                '20': '5.5rem'
            },
        },
    },
    plugins: [],
}

// npx tailwindcss -i css/core.css -o css/tailwind.min.css --minify