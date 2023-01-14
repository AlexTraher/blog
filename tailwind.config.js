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
        "gait-dark": "url('/assets/gait-green.svg')",
        "gait-i-dark": "url('/assets/gait-i-green.svg')",
        "gait-software-dark": "url('/assets/gait-software-green.svg')",
        
      },
      colors: {
        gait: {
           // if you change these, be sure to change it in custom.css too
          blue: "#93C5FB",
          "blue-dark": "#020120",
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
      base: ['20px', '40px'],
      xl: '1.25rem',
      '2xl': ['40px', '60px'],
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  variants: {},
  plugins: []
};