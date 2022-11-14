const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        darkGreen: "0 0 3px 3px #17553a",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
      active: ["first"],
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            "color-1": "#8b9761",
            "color-2": "#cae2d9",
            "color-3": "#94beaf",
          },
        },
      },
      themes: [
        {
          // name your theme anything that could be a valid css selector
          // remember what you named your theme because you will use it as a class to enable the theme
          name: "atm",
          // put any overrides your theme has here
          // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
          extend: {
            colors: {
              "color-1": "#8b9761",
              "color-2": "#cae2d9",
              "color-3": "#94beaf",
            },
          },
        },
        {
          name: "ctm",
          extend: {
            colors: {
              "color-1": "#0f4c75",
              "color-2": "##C0D8F3",
            },
          },
        },
      ],
    }),
  ],
};
