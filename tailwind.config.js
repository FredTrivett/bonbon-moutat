/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(var(--violet)/<alpha-value>)",
        lightblue: "hsl(var(--lightblue)/<alpha-value>)",
        darkblue: "hsl(var(--darkblue)/<alpha-value>)",
      },
      backgroundImage: {
        bg: "url('/background.png')",
      },
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};
