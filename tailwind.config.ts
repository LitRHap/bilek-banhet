import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "300px",
      md: "680px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#424442",
      },
      dropShadow: {
        "3xl": "2px 0px 0px rgba(0, 0, 0, 5)",
        "4xl": "0px 15px 15px rgba(0, 0, 0, 0.4)",
        glow: "0px 5px 5px rgba(255, 165, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
