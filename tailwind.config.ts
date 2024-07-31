import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": {
            transform: "scaleY(0)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
        },
        "open-1": {
          "100%": { transform: "translateY(11px) rotate(-45deg)" },
        },
        "open-2": {
          "100%": { opacity: "0" },
        },
        "open-3": {
          "100%": { transform: "translateY(-11px) rotate(45deg)" },
        },
        "close-1": {
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        "close-2": {
          "100%": { opacity: "1" },
        },
        "close-3": {
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
      },
      animation: {
        "slide-in": "slideIn 1s",
        "bar-1-to-cross": "open-1 0.3s forwards",
        "bar-2-to-corss": "open-2 0.3s forwards",
        "bar-3-to-corss": "open-3 0.3s forwards",
        "close-1": "close-1 0.3s forwards",
        "close-2": "close-2 0.3s forwards",
        "close-3": "close-3 0.3s forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        banner: "url(/banner.jpeg)",
      },
    },
  },
  darkMode: "class",
};
export default config;
