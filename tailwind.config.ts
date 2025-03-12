import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOrange: "#FE6E44",
        darkOrange: "rgb(255,77,14)",
        lightText: "#888888",
        accent: "#000000",
        accentWhite: "#FFFFFF",
        lightRed: "#EF3636",
        lightGreen: "#41CE09",
        bgLight: "#F5F5F5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "icon-to-right": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(50%)" },
          "50%": { transform: "translateX(150%)" },
          "75%": { transform: "translateX(200%)" },
          "80%": { transform: "translateX(-200%)" },
          "90%": { transform: "translateX(-100%)" },
          "95%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "icon-to-left": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-50%)" },
          "50%": { transform: "translateX(-150%)" },
          "75%": { transform: "translateX(-200%)" },
          "80%": { transform: "translateX(200%)" },
          "90%": { transform: "translateX(100%)" },
          "95%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "icon-to-right": "icon-to-right .5s ease",
        "icon-to-left": "icon-to-left .5s ease",
      },
    },
  },
  plugins: [],
};
export default config;
