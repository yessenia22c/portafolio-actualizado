import type { Config } from "tailwindcss";

export default {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        'custom': '-8px 10px 15px #0000004b',
      },
      borderColor: {
        'custom': 'rgb(0 186 149 / var(--tw-border-opacity, 1))',
      },
    },
  },
  plugins: [],
} satisfies Config;
