import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    borderRadius: {
      full: "50%",
      corners: "5px",
    },
    colors: {
      "blue-centric": "#03001c",
      coral: "#ff533d",
      eggshell: "#f5f5f5",
      leather: "#fee8b0",
    },
    screens: {
      large: "720px",
      laptop: "540px",
    },
  },

  keyframes: {
    wiggle: {
      "0%, 100%": { transform: "rotate(-15deg)" },
      "50%": { transform: "rotate(15deg)" },
    },
  },

  animation: {
    wiggle: "wiggle 1s ease-in-out infinite",
  },
  plugins: [],
});
