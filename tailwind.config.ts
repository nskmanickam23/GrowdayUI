import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palettePrimary: "#55283c",
        palatteSecondary: "#2a3950",
        palatteThirdly: "#e4d1c3",
        palatteTeritary: "#c0cfca",
        palatteFour: "#ffffff",
        lightbg: "#FAFAF5",
        darkbg: "#121212",
        lightborder: "#E0E0DC",
        darkborder: "#2c2c2c",
        lighttext: "#131313",
        darktext: "#bfbfbf",
        addNewBtn: "#07412e",
        //add more colors here
      },
    },
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
  },
  plugins: [],
};
export default config;
