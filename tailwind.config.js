module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "twitter-light": "url('/assets/twitter-light.svg')",
        "twitter-dark": "url('/assets/twitter-dark.svg')",
        "github-light": "url('/assets/github-light.svg')",
        "github-dark": "url('/assets/github-dark.svg')",
        "gait-light": "url('/assets/gait-light.svg')",
        "gait-i-light": "url('/assets/gait-i-light.svg')",
        "gait-software-light": "url('/assets/gait-software-light.svg')",
        "gait-dark": "url('/assets/gait-dark.svg')",
        "gait-i-dark": "url('/assets/gait-i-dark.svg')",
        "gait-software-dark": "url('/assets/gait-software-dark.svg')",
        
      },
      colors: {
        gait: {
          blue: '#93C5FB', // if you change this, be sure to change it in custom.css too
        }
      },
    },
   
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    }
  },
  variants: {},
  plugins: []
};