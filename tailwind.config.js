/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "sans-serif"] },
      boxShadow: {
        "saas-card": "0 4px 20px -2px rgba(0,0,0,0.05)",
        "saas-hover": "0 12px 30px -4px rgba(37,99,235,0.12)",
      },
      keyframes: {
        floatLoop: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        pulseGlow: { "0%,100%": { opacity: 0.4 }, "50%": { opacity: 0.8 } },
      },
      animation: { float: "floatLoop 4s ease-in-out infinite", "pulse-glow": "pulseGlow 3s infinite" },
    },
  },
  plugins: [],
};
