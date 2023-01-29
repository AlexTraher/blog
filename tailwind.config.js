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
        "external-link-icon": "url('/assets/external-link-black.svg')",
        "external-link-icon-dark": "url('/assets/external-link-white.svg')",
        "gauge-light": "url('/assets/gauge.svg')",
        "gauge-dark": "url('/assets/gauge-white.svg')",
        "user-light": "url('/assets/user.svg')",
        "user-dark": "url('/assets/user-white.svg')",
        "mail-icon": "url('/assets/mail-black.svg')",
        "mail-icon-dark": "url('/assets/mail-white.svg')",
      },
      colors: {
        gait: {
           // if you change these, be sure to change it in custom.css too
          blue: "#9CBEE2", // dark theme
          green: "#314E2D", // light theme
          "blue-deep": "#3F4466", // dark theme
          "green-deep": "#314E2D", // light theme
          "blue-shallow": "#525885", // dark theme
          "green-shallow": "#DCE5DD", // light theme
          "paper-dark": "#282B41", // dark theme
          "paper": "#EBEFEC", // light theme
          "off-black": "#262526", // dark theme
          "off-white": "#FEFCF6", // light theme
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
      base: ['15px', '40px'],
      lg: ['20px', '40px'],
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