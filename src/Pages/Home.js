import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Typography, Button } from "@material-tailwind/react";
import img from "./../IMG-8897.jpg";

import tag from "../closetag.png";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useEffect, useState } from "react";

const Home = () => {
  const texts = ["Hi!", "Bonjour!", "Ciao!", "Hola!"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [texts.length]);

  return (
    <div className="bg-blue-centric w-full m-0 text-eggshell h-screen justify-between">
      <Header />
      <div className="text-leather pt-28 w-full flex flex-col gap-8 justify-between self-center">
        <div className="flex flex-col w-full items-center self-center justify-between gap-4">
          <img src={img} className="w-28 h-28 rounded-full  animate-wiggle " />
          <div className="flex flex-col text-center justify-center ">
            <p className="large:text-2xl text-xl flex-col w-full text-center">
              <span className=" text-coral text-2xl large:text-3xl">
                {texts[currentTextIndex]}{" "}
              </span>
              <br className="large:hidden" />
              <span>My name is </span>
              <span className="text-coral large:text-5xl text-3xl">
                Temidayo Kehinde
              </span>
            </p>
            <span className="large:text-xl text-sm large:text-right text-left">
              Front-End Web Developer{" "}
              <img src={tag} className="inline large:w-10 pl-2 w-8" />
            </span>
          </div>
          <div className="tracking-wide capitalize text-center w-5/6 large:w-4/6 large:text-lg italic">
            <p className="pb-4">
              I am <span className="">passionate</span> about bridging
              the gap between businesses and their customers by bringing{" "}
              <span className=" "> user-friendly designs</span> to life using{" "}
              <span className=""> codes.</span>
            </p>
            <p>
              <span className="">
                Eating. <span className="text-leather">Coding. </span> Singing.
              </span>
              <br />
              ...These three things make me happy.
            </p>
          </div>
        </div>
        <span className="w-fit pl-12 h-fit self-end text-leather pr-2 font-bold text-md italic justify-end text-right bg-coral ">
          Built with React + Tailwind.
        </span>
      </div>
    </div>
  );
};

export default Home;
