module.exports = {
  theme: {
    extend: {
      height: {
        'screen/2': '50vh',
        'screen/2.5': 'calc(100vh / 2.5)',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      }
    }
  },
  variants: { display: ["responsive", "hover", "focus"] },
  plugins: [require("tailwindcss-debug-screens")],
}
