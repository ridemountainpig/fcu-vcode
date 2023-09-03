/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "4rem": "4rem",
                "5rem": "5rem",
                "6rem": "6rem",
                "7rem": "7rem",
                "8rem": "8rem",
                "9rem": "9rem",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "wave-blue": "#cbd5e1",
            },
            borderWidth: {
                5: "5px",
                6: "6px",
            },
        },
    },
    plugins: [],
};
