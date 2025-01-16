/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
            "LLdarkGreen": "#649A00",
            "LLlightGreen": "#BABD8D",
            "LLlightPink": "#FFF7F3",
            "LLAmber": "#FA9500",
            "LLOrange": "#EB6424",
            "LLlightBlue": "#E1EBE8",
            "LLmidBlue": "#3397B0",
            "LLdarkBlue": "#115578"
      },
      
      

    },
  },
  daisyui: {
    themes: ["light"],

  },
  plugins: [
    require("@tailwindcss/typography"), 
    require("daisyui"),
  ],
}

