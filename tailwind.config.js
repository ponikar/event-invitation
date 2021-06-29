module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
        back: "#F8F8F8",
        white: "#fff",
        highlight: "#F2F2F2",
        info: "#B2B2B2",
        gr: "#E0E0E0",
        primary: "#6C63FF",
        grey: "grey"
      },
      borderRadius: {
        pm: "2.5px",
        full: "100%"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    boxShadow: {
       DEFAULT: "0px 4px 50px rgba(255, 255, 255, 0.25)"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
