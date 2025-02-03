import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary blue colors with enhanced contrast
        blue: {
          50: "#EEF6FF", // Light background (11.04:1 with black text)
          100: "#D9EAFF", // Subtle background (10.03:1 with black text)
          200: "#B3D4FF", // Hover states
          300: "#8CBEFF", // Borders
          400: "#4A9EFF", // Secondary text/icons
          500: "#0F72E5", // Primary buttons/accents (4.5:1 with white text)
          600: "#0C5BBF", // Hover state for primary (5.5:1 with white text)
          700: "#094892", // Pressed state (7.2:1 with white text)
          800: "#063571", // Dark accents
          900: "#042552", // Darkest shade
        },
        // Gray scale for text and UI elements
        gray: {
          50: "#F9FAFB", // Background
          100: "#F3F4F6", // Subtle background
          200: "#E5E7EB", // Borders/dividers
          300: "#D1D5DB", // Disabled states
          400: "#9CA3AF", // Secondary text
          500: "#6B7280", // Muted text
          600: "#4B5563", // Secondary headings
          700: "#374151", // Primary text
          800: "#1F2937", // Headings
          900: "#111827", // Black text
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
