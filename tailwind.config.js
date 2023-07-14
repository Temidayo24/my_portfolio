import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        small: "12px",
        medium: "24px",
        project: "90%"
      },

      brightness: {
        white: "113%",
      },

      backgroundImage: {
        img: "url('/home/adebike/Desktop/my_portfolio/src/bg.jpg')",
      },
    },
    borderRadius: {
      full: "50%",
      corners: "5px",
      corners2: "30px",
    },
    borderWidth: {
      sm: "1px",
      m: "2px",
    },

    height: {
      cards: "400px",
      fit: "398px",
      screen: "100vh",
      small: "20px",
      medium: "24px",
    },

    colors: {
      "blue-centric": "#E6E6E6",
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
    flip: {
      "0%, 80%": { transform: "rotateY(360deg)" },
    },
  },

  animation: {
    wiggle: "wiggle 1s ease-in-out infinite",
    flip: "flip 2s infinite",
  },
  plugins: [],
});
