/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayFr: "#333",
        black: "#191919",
        lighter: "#727272",
        offWhite: "#E7E6E6",
        semiGray: "#202425",
        semiBlack: "#1D1F20",
        kongFoPanda: "#008170",
      },
      fontFamily: {
        "p-extraLight": "p-extraLight",
        "p-semiBold": "p-semiBold",
        "p-regular": "p-regular",
        "i-medium": "i-medium",
      },
    },
  },
  plugins: [],
};
