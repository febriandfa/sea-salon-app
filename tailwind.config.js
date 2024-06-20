import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                playfair: ["Playfair", "serif"],
                raleway: ["Raleway", "sans-serif"],
            },
            colors: {
                gold: {
                    100: "#ffdc73",
                    300: "#ffcf40",
                    500: "#ffbf00",
                    700: "#bf9b30",
                    900: "#a67c00",
                },
            },
        },
    },

    plugins: [forms],
};
