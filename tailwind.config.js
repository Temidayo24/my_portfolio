import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        small: "12px",
        medium: "24px",
        project: "95%",
        cards: "400px",
        cards2: "250px"
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
      cards2: "300px",
      fit: "398px",
      screen: "100vh",
      small: "20px",
      medium: "24px",
      half: "45vh",
      more: "60vh",
      small2: "90vw"
    },

    colors: {
      "blue-centric": "#E6E6E6",
      coral: "#e9dddd",
      eggshell: "#e9dddd",
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
    typing: {
      from: {
        width: "0",
      },
    },
  },

  animation: {
    wiggle: "wiggle 1s ease-in-out infinite",
    flip: "flip 2s infinite",
    type: "typing 2s steps(13, end), blink-caret 0.5s step-end infinite alternate",
  },

  plugins: [],
});
