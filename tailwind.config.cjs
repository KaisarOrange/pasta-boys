/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      back: `rgba(0, 0, 0, 0.600)`,
    },
    extend: {
      fontFamily: {
        damion: ['"Damion"'],
        poppins: ['"Poppins"'],
        aref: ['"Aref Ruqaa", serif'],
      },
    },
  },
  plugins: [],
};
