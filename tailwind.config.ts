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
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      dropShadow: {
        "3xl": "2px 0px 0px rgba(0, 0, 0, 5)",
      },
    },
  },
  plugins: [],
};
export default config;
