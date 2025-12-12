/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <-- important: use class strategy (adds .dark to <html>)
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      /* Keep your original color scales for utility usage */
      colors: {
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

        /* Semantic color tokens mapped to your CSS variables.
           Use classes like bg-bg, text-foreground, bg-card, text-card-foreground, etc.
           These resolve at runtime from :root / .dark variables you provided. */
        bg: "var(--color-background)",
        foreground: "var(--color-foreground)",
        "card-bg": "var(--color-card)",
        "card-foreground": "var(--color-card-foreground)",
        popover: "var(--color-popover)",
        "popover-foreground": "var(--color-popover-foreground)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        secondary: "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",
        destructive: "var(--color-destructive)",
        "destructive-foreground": "var(--color-destructive-foreground)",
        border: "var(--color-border)",
        input: "var(--color-input)",
        "input-bg": "var(--color-input-background)",
        ring: "var(--color-ring)",
        "chart-1": "var(--color-chart-1)",
        "chart-2": "var(--color-chart-2)",
        "chart-3": "var(--color-chart-3)",
        "chart-4": "var(--color-chart-4)",
        "chart-5": "var(--color-chart-5)",
        sidebar: "var(--color-sidebar)",
        "sidebar-foreground": "var(--color-sidebar-foreground)",
        "sidebar-primary": "var(--color-sidebar-primary)",
        "sidebar-primary-foreground": "var(--color-sidebar-primary-foreground)",
        "sidebar-accent": "var(--color-sidebar-accent)",
        "sidebar-accent-foreground": "var(--color-sidebar-accent-foreground)",
        "sidebar-border": "var(--color-sidebar-border)",
        "sidebar-ring": "var(--color-sidebar-ring)",
      },

      /* Preserve your theme extensions */
      fontSize: {
        base: "16px",
        "2xl": "1.5rem",
      },

      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },

      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "glow-orange":
          "0 0 20px rgba(254,154,0,0.3), 0 0 40px rgba(254,154,0,0.1)",
      },

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

      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #e17100, #bb4d00)",
        "gradient-accent": "linear-gradient(135deg, #fe9a00 0%, #e17100 100%)",
      },
    },
  },

  plugins: [],
};
