import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c2410c",
        textcolor: "#55575F",
        textwhite: "#E1E7EF",
        title: "#1E202B",
        darkbg: "#1B242F",
        adminbg: "#FBFBFF",
        dark2: "#1E293B",
        lightdark: "#262F38",
        darkborder: "#283344",
      },

      // fontFamily: {
      //   gilroyRegular: ["Gilroy-regular", "sans-serif"],
      //   sacramento: ["sacramento"],
      // },
    },
  },
  plugins: [],
};
export default config;
