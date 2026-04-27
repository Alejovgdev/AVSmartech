import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#001B3F",
        electric: "#005BFF",
        cyan: "#00AEEF",
        soft: "#F4F8FF",
        muted: "#5B6472",
        ink: "#07152D"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Sora", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 27, 63, 0.12)",
        glow: "0 18px 70px rgba(0, 91, 255, 0.24)",
        soft: "0 16px 50px rgba(7, 21, 45, 0.08)"
      },
      backgroundImage: {
        "blue-radial":
          "radial-gradient(circle at 50% 0%, rgba(0, 174, 239, 0.26), rgba(0, 27, 63, 0) 42%)",
        "premium-line":
          "linear-gradient(135deg, rgba(0,91,255,0.16), rgba(0,174,239,0.08), rgba(255,255,255,0))"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
