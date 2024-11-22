import type { Config } from "tailwindcss";

export default {
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
        'custom': '-10px 11px 8px #000000a9',
      },
      borderColor: {
        'custom': 'rgb(0 186 149 / var(--tw-border-opacity, 1))',
      },
    },
  },
  plugins: [],
} satisfies Config;
