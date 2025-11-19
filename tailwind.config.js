/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        /* Primary Palette */
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#fe9a00",
          600: "#e17100",
          700: "#bb4d00",
          800: "#7b3306",
          900: "#431407",
          950: "#1a0803",
        },
        accent: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        background: "#0a0a0a",
        foreground: "#fafafa",
        card: "#171717",
        "card-foreground": "#fafafa",
        popover: "#171717",
        "popover-foreground": "#fafafa",
        secondary: "#262626",
        "secondary-foreground": "#fafafa",
        muted: "#262626",
        "muted-foreground": "#a3a3a3",
        "accent-main": "#262626",
        "accent-main-foreground": "#fafafa",
        destructive: "#dc2626",
        "destructive-foreground": "#fafafa",
        border: "#262626",
        input: "#171717",
        ring: "#fe9a00",
        success: "#22c55e",
        warning: "#fe9a00",
        info: "#3b82f6",
      },

      // Custom font sizes (if needed)
      fontSize: {
        base: "16px",
        "2xl": "1.5rem", // For example, you can change this based on your design
      },

      // Custom radius
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },

      // Add box shadows
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "glow-orange":
          "0 0 20px rgba(254,154,0,0.3), 0 0 40px rgba(254,154,0,0.1)",
      },

      // Custom Animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
      },

      // Gradients
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #e17100, #bb4d00)",
        "gradient-accent": "linear-gradient(135deg, #fe9a00 0%, #e17100 100%)",
      },
    },
  },

  plugins: [],
};
