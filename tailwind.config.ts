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
      "clr-accent-300": "rgba(21, 21, 21, 1)",
      "clr-accent-400": "rgba(13, 13, 13, 1)",
      "clr-accent-500": "rgba(13, 13, 13, .8)",
      "clr-accent-600": "rgba(26, 26, 26, 1)",
      "clr-accent-700": "rgba(31, 31, 31, 1)",
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
