/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#FEF6E4",
          seconary: "#F582AE",
          lightblue :"#8BD3DD"

        },
        text: {
          primary: "#001858",
        },
        spacing: {
          "8xl": "96rem",
          "9xl": "128rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
    },
  },
  plugins: [],
};
