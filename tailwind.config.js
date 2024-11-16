/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,svelte,svx}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
        require("@tailwindcss/typography"),
    ],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "#bb99ff",
                    secondary: "#99ddff",
                    accent: "#ddccff",
                    warning: "#ffee99"
                }
            },
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#bb99ff",
                    secondary: "#99ddff",
                    accent: "#ddccff",
                    warning: "#ffee99"
                }
            }
        ],
    },
}