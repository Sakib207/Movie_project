module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#221f1f',
          dark: '#222222',

        },
        secondary: {
          DEFAULT: '#e50914',
          dark: '#b81d24',
        },
        light: {
          DEFAULT: '#f5f5f1',
      },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
