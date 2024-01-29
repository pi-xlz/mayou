import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      base: "rgba(20, 20, 20, 1)",
      "clr-prmry": "rgba(245, 245, 245, 1)",
      "clr-scndry": "rgba(156, 156, 156, 1)",
      "clr-accent-100": "rgba(37, 37, 37, 1)",
      "clr-accent-200": "rgba(22, 22, 22, 1)",
      "clr-accent-300": "rgba(21, 21, 21, 0.98)",
      "clr-accent-400": "rgba(13, 13, 13, 1)",
    },
    fontSize: {
      xs: "0.625",
      base: ".875rem",
      xl: "4rem",
    },
    fontFamily: {
      sans: ["var(--font-satoshi)"],
      cursive: ["var(--font-satisfy)"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
