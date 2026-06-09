/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-300 */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* amber-400 */
        background: "var(--color-background)", /* white */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* gray-800 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* gray-100 */
          foreground: "var(--color-secondary-foreground)", /* gray-900 */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* orange-800 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-50 */
          foreground: "var(--color-muted-foreground)", /* gray-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* amber-400 */
          foreground: "var(--color-accent-foreground)", /* gray-900 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-700 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* yellow-700 */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* orange-800 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        surface: "var(--color-surface)", /* gray-100 */
        'text-primary': "var(--color-text-primary)", /* gray-900 */
        'text-secondary': "var(--color-text-secondary)", /* gray-500 */
        cta: {
          DEFAULT: "var(--color-cta)", /* red-600 */
          foreground: "var(--color-cta-foreground)", /* white */
        },
        trust: {
          DEFAULT: "var(--color-trust)", /* blue-600 */
          foreground: "var(--color-trust-foreground)", /* white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '600' }],
        'display': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3', fontWeight: '500' }],
        'subheading': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        'brand-xs': 'var(--spacing-xs)', /* 8px */
        'brand-sm': 'var(--spacing-sm)', /* 12px */
        'brand-md': 'var(--spacing-md)', /* 20px */
        'brand-lg': 'var(--spacing-lg)', /* 32px */
        'brand-xl': 'var(--spacing-xl)', /* 52px */
      },
      boxShadow: {
        'brand': 'var(--shadow-brand)',
        'elevated': 'var(--shadow-elevated)',
        'soft': 'var(--shadow-soft)',
        'subtle': 'var(--shadow-subtle)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "slide-up": "slide-up 0.3s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'brand': '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}