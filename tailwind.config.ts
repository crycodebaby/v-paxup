// tailwind.config.ts
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";
// Optional nice-to-haves:
import aspectRatio from "@tailwindcss/aspect-ratio";
import lineClamp from "@tailwindcss/line-clamp";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    /* Viewport Breakpoints – von sehr klein bis 4K */
    screens: {
      xxs: "350px", // sehr kleine Geräte
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1920px", // 1080p
      "4xl": "2560px", // WQHD / 2.5K
      "5xl": "3840px", // 4K / UHD
    },

    /* Container – zentriert, mit ansteigenden Innenabständen */
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "1.75rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
        "5xl": "3.5rem",
      },
      screens: {
        xxs: "350px",
        xs: "380px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1800px", // Content-Breite bei 1080p
        "4xl": "2100px", // Bühne auf 2.5K
        "5xl": "2400px", // 4K – noch gut lesbar
      },
    },

    extend: {
      /* Fonts via CSS-Variable (Single Source of Truth in index.css) */
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },

      /* HSL-Farben aus CSS-Variablen */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
      },

      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-subtle": "var(--gradient-subtle)",
        "gradient-overlay": "var(--gradient-overlay)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        button: "var(--shadow-button)",
        glow: "var(--shadow-glow)",
        elegant: "var(--shadow-elegant)",
      },
      transitionTimingFunction: {
        smooth: "var(--transition-smooth)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* Fluid Type & Spacing – konsistent auf großen Screens */
      fontSize: {
        "fluid-h1": "clamp(2.2rem, 1.6rem + 2.2vw, 5rem)",
        "fluid-h2": "clamp(1.8rem, 1.3rem + 1.6vw, 3.5rem)",
        "fluid-h3": "clamp(1.4rem, 1.1rem + 1.1vw, 2.5rem)",
        "fluid-body": "clamp(1rem, 0.95rem + 0.35vw, 1.25rem)",
        "fluid-small": "clamp(0.9rem, 0.85rem + 0.25vw, 1.05rem)",
      },
      lineHeight: {
        snugger: "1.2",
        comfy: "1.5",
      },
      spacing: {
        "fluid-6": "clamp(1.25rem, 1rem + 1vw, 2.5rem)",
        "fluid-10": "clamp(2rem, 1.6rem + 1.6vw, 4rem)",
        "fluid-16": "clamp(3rem, 2.2rem + 2.6vw, 6rem)",
      },
      maxWidth: {
        "content-tight": "72ch",
        "content-wide": "96rem",
        "screen-3xl": "1920px",
        "screen-4xl": "2560px",
        "screen-5xl": "3840px",
      },

      /* Typografie-Plugin feinjustiert: bessere Prose Defaults */
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: theme("maxWidth.content-tight"),
            color: "hsl(var(--foreground))",
            h1: {
              fontSize: theme("fontSize.fluid-h1"),
              lineHeight: theme("lineHeight.snugger"),
            },
            h2: {
              fontSize: theme("fontSize.fluid-h2"),
              lineHeight: theme("lineHeight.snugger"),
            },
            h3: {
              fontSize: theme("fontSize.fluid-h3"),
              lineHeight: theme("lineHeight.snugger"),
            },
            p: {
              fontSize: theme("fontSize.fluid-body"),
              lineHeight: theme("lineHeight.comfy"),
            },
            a: { color: "hsl(var(--primary))" },
            strong: { color: "hsl(var(--foreground))" },
          },
        },
        invert: {
          css: {
            color: "hsl(var(--foreground))",
            a: { color: "hsl(var(--primary))" },
          },
        },
      }),

      /* Micro-Animations */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 200ms ease-out",
        "collapsible-up": "collapsible-up 150ms ease-in",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
      },
    },
  },

  plugins: [animate, typography, aspectRatio, lineClamp],
} satisfies Config;
