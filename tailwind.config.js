/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        colorBg: "#1f1f38",
        colorBgVariant: "#2c2c6c",
        colorPrimary: "#4db5ff",
        colorPrimaryVariant: "rgba(77, 181, 255, 0.4)",
      },
      colors: {
        colorLight: "rgba(255, 255, 255, 0.6)",
        colorPrimary: "#4db5ff",
        colorBg: "#1f1f38",
      },
      width: {
        containerWidthLg: "75%",
        containerWidthMd: "86%",
        containerWidthMs: "90%",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      screens: {
        tablet: "640px",
        laptot: "1024px",
        desktop: "1280px",
        '2xl': {'max': '1535px'},
        'xl': {'max': '1280px'},
        'lg': {'max': '1024px'},
        'md': {'max': '768px'},
        'sm': {'max': '600px'}
      },
      borderRadius: {
        roundedMe: '12rem 12rem 0 0',
      },
      padding: {
        me: '5rem 1.5rem 1.5rem 1.5rem'
      }
    },
  },
  plugins: [],
};
