/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#299143",
        secondary: "#FF6363",
        tertiary: "#4B5563",
        quaternary: "#f9fafb",
        warning: "#F59E0B",
        danger: "#EF4444",
        success: "#10B981",
        info: "#3B82F6",
        light: "#F3F4F6",
        dark: "#111827",
      },
    },
  },
  plugins: [],
};
