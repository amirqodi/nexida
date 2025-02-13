import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brandRed: "var(--brandRed)",
        articlebg: "var(--articlebg)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.12) 100%)",
        "custom-gradient2":
          "linear-gradient(90.52deg, rgba(255, 255, 255, 0.0784) 0.45%, rgba(153, 153, 153, 0.0952) 101.3%)",
        "custom-gradient3":
          "linear-gradient(90.52deg, rgba(30, 30, 30) 0.45%, rgba(20, 20, 20) 101.3%)",
      },
      boxShadow: {
        "custom-shadow": "0px 4px 7.8px rgba(0, 0, 0, 0.38)",
      },
    },
  },
  plugins: [],
} satisfies Config;
