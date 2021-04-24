module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "freefocus-blue": "#436274",
        "freefocus-secondary": "#5fc5e3",
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
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
}
