/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your Brand Palette
        primary1: "#f27c22", // Main Orange
        fadedPrimary1: "#f8c699",
        primary2: "#365a30", // Main Green
        fadedPrimary2: "#b1c7ad",

        // 1. "Surface" Grays: Optimized to look good with Green/Orange
        // Use these for backgrounds, borders, and secondary text instead of default gray
        surface: {
          50: "#fbfbf9", // Off-white with a hint of warmth
          100: "#f1f2ee", // Lightest gray for section backgrounds
          200: "#e5e7e0", // Border color
          500: "#6b7280", // Secondary text
          900: "#111827", // Heading text
        },

        // 2. Functional Colors: Balanced to match your brand's saturation
        // Use for alerts, stock status, or price drops
        error: "#dc2626", // Out of stock / Error
        success: "#16a34a", // Prescription verified / Success
        warning: "#ca8a04", // Low stock
      },
      // Added Animation for your Hero Blobs
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
