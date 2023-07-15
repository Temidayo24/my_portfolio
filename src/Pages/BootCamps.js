import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import git from "./../git.png";
import tailwind from "./../tailwind.png";
import html from "./../html-5.png";
import css from "./../css-3.png";
import react from "./../react.png";
import Skills from "../Components/Skills";
import Footer from "../Components/Footer";

const BootCamps = () => {
  return (
    <div className="bg-black w-full m-0 text-coral h-screen flex flex-col">
      <Header />
      <div className="large:h-screen h-full large:flex-row flex flex-col justify-center items-center gap-8">
        <ol className="text-eggshell flex flex-col gap-8 large:text-right text-center large:w-2/4 jump">
          <li className="flex flex-col gap-3">
            <div>
              <h1 className="large:text-3xl text-2xl text-eggshell">
                Intro to Programming
              </h1>
              <span className="text-coral">Udacity | access </span>
            </div>
            <Link className="underline italic text-eggshell text-l">
              Certification in progress
            </Link>
          </li>
          <li className="flex flex-col gap-3">
            <div>
              <h1 className="large:text-3xl text-2xl text-eggshell">
                Software Development{" "}
              </h1>
              <span className="text-coral">Stutern | Ingressive for Good </span>
            </div>
            <Link className="underline italic text-eggshell text-l">
              Click to see certification
            </Link>
          </li>
          <li className="flex flex-col gap-3">
            <div>
              <h1 className="large:text-3xl text-2xl text-eggshell">
                Frontend (HTML/CSS/JavaScript)
              </h1>
              <span className="text-coral">Zuri | Ingressive for Good </span>
            </div>
            <Link
              to="https://w2pp.zuriboard.com/dashboard/certificate/41b6c30f-47f9-43b5-a166-cba3ff9849e2"
              target="_blank"
              className="underline italic text-eggshell text-l"
            >
              Click to see certification
            </Link>
          </li>
        </ol>
        <div className="flex large:flex-col gap-4 justify-center large:w-2/4 slide">
          <Skills location={react} text="React" />
          <Skills location={tailwind} text="Tailwindcss" />
          <Skills location={html} text="HTML" />
          <Skills location={css} text="CSS" />
          <Skills location={git} text="Git" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BootCamps;
