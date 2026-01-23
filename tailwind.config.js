/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '25%': { transform: 'scale(1.05)', opacity: 0.9 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
          '75%': { transform: 'scale(1.05)', opacity: 0.9 },
        },
        fadeInHeartbeat: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        fadeInHeartbeat: 'fadeInHeartbeat 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};