/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background1: "hsl(252, 100%, 67%)",
        background2: "hsl(241, 81%, 54%)",
        circle1: "hsla(256, 72%, 46%, 1)",
        circle2: "hsla(241, 72%, 46%, 0)",
        lightRed: "hsla(0, 100%, 67%, 0.1)",
        orangeyYellow: "hsla(39, 100%, 56%, 0.1)",
        greenTeal: "hsla(166, 100%, 37%, 0.1)",
        cobaltBlue: "hsla(234, 85%, 45%, 0.1)",
        lightRedText: "hsl(0, 100%, 67%)",
        orangeyYellowText: "hsl(39, 100%, 56%)",
        greenTealText: "hsl(166, 100%, 37%)",
        cobaltBlueTxt: "hsl(234, 85%, 45%)",
        White: "hsl(0, 0%, 100%)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkGrayBlue: "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
