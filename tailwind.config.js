module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "twitter-light": "url('/assets/twitter-light.svg')",
        "twitter-dark": "url('/assets/twitter-dark.svg')",
        "github-light": "url('/assets/github-light.svg')",
        "github-dark": "url('/assets/github-dark.svg')",
        "gait-light": "url('/assets/gait-black.svg')",
        "gait-i-light": "url('/assets/gait-i-black.svg')",
        "gait-software-light": "url('/assets/gait-software-black.svg')",
        "gait-dark": "url('/assets/gait-white.svg')",
        "gait-i-dark": "url('/assets/gait-i-white.svg')",
        "gait-software-dark": "url('/assets/gait-software-white.svg')",
        "icons8-external-link": "url('/assets/icons8-external-link.svg')",
        "icons8-external-link-dark": "url('/assets/icons8-external-link-dark.svg')",
        "gauge-light": "url('/assets/gauge.svg')",
        "gauge-dark": "url('/assets/gauge.svg')",
        "user-light": "url('/assets/user.svg')",
        "user-dark": "url('/assets/user.svg')",
      },
      colors: {
        gait: {
           // if you change these, be sure to change it in custom.css too
          blue: "#9CBEE2",
          "blue-dark": "#020120",
          "blue-mid": "#525885",
          "green-light": "#DCE5DD",
          "green-dark": "#80B27B",
          "paper": "#EBEFEC"

        }
      },
    },
   
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      header: ['Barlow', 'Inter', 'sans-serif'],
      body: ['Telugu Sangam MN', 'Inter', 'sans-serif']
    },
    fontSize: {
      sm: '0.8rem',
      base: ['14px', '30px'],
      lg: ['20px', '30px'],
      xl: ['30px', '50px'],
      '2xl': ['40px', '60px'],
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  variants: {},
  plugins: []
};