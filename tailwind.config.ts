import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5F0EB",
        dark: "#1B3B2F",
        text: "#1A1A1A",
        muted: "#666666",
        border: "#E8E0D5",
        accent: "#1B3B2F",
      },
      backgroundColor: {
        primary: "#F5F0EB",
        secondary: "#FFFFFF",
      },
      textColor: {
        primary: "#1A1A1A",
        secondary: "#666666",
        muted: "#999999",
      },
    },
  },
  plugins: [],
};

export default config;