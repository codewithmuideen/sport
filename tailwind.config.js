/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#071A2F",
          900: "#050F1D",
          800: "#0A1B30",
          700: "#0F2540",
          600: "#173252",
          500: "#28425F",
        },
        gold: {
          50: "#FBF4DE",
          100: "#F5E6B8",
          200: "#EFD98F",
          300: "#E6C666",
          400: "#DEB94A",
          500: "#D4AF37",
          600: "#B3902A",
          700: "#8F7220",
          800: "#6B5518",
          900: "#473911",
        },
        silver: {
          50: "#F5F7FA",
          100: "#E6EBF1",
          200: "#CBD5E1",
          300: "#AAB8C9",
          400: "#8B9BB0",
          500: "#6C7D93",
          600: "#4F5F75",
        },
        parchment: "#FFFFFF",
      },
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Poppins'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.4em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F5E6B8 0%, #D4AF37 45%, #8F7220 100%)",
        "silver-gradient": "linear-gradient(135deg, #F6F7F8 0%, #B9BFC8 50%, #5E6470 100%)",
        "ink-fade": "linear-gradient(180deg, rgba(7,26,47,0) 0%, rgba(7,26,47,0.85) 60%, #071A2F 100%)",
        "ink-fade-t": "linear-gradient(0deg, rgba(7,26,47,0) 0%, rgba(7,26,47,0.9) 100%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(212,175,55,0.45)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
