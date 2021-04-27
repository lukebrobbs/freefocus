module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "freefocus-blue": "#436274",
        "freefocus-secondary": "#5fc5e3",
        "freefocus-gray": "#d1d9df",
        "freefocus-tertiary": "rgb(86, 86, 86)",
      },
      boxShadow: {
        "3xl": "7px 5px 5px rgba(109, 109, 109, 0.3)",
      },
      width: {
        modal: "80vw",
      },
      scale: {
        "102": "1.02",
      },
      gridTemplateColumns: {
        talent: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontSize: {
        "2xs": ["0.6rem", "18px"],
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
}
