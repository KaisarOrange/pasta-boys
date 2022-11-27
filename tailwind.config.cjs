/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      back: `rgba(0, 0, 0, 0.750)`,
    },
    extend: {
      fontFamily: {
        damion: ['"Damion"'],
        poppins: ['"Poppins"'],
        aref: ['"Aref Ruqaa", serif'],
      },
    },
    backgroundImage: {
      grup: 'url(../src/assets/grup.png)',
    },
  },
  plugins: [],
};
