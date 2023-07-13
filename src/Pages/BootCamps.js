import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import git from "./../git.png";
import tailwind from "./../tailwind.png";
import html from "./../html-5.png";
import css from "./../css-3.png";
import react from "./../react.png";
import Skills from "../Components/Skills";

const BootCamps = () => {
  return (
    <div className="bg-blue-centric w-full m-0 text-leather h-screen">
      <Header />
      <div className="large:h-screen h-full large:flex-row flex flex-col justify-center gap-8">
        <ol className="text-leather large:pt-32 pt-24 flex flex-col gap-8 large:text-right text-center large:w-2/4">
          <li className="flex flex-col gap-3">
            <div>
              <h1 className="text-3xl text-coral">Intro to Programming</h1>
              <span className="font-bold">Udacity | access </span>
            </div>
            <Link className="underline italic text-coral">
              Certification in progress
            </Link>
          </li>
          <li className="flex flex-col gap-3">
            <div>
              <h1 className="text-3xl text-coral">Software Development </h1>
              <span className="font-bold">Stutern | Ingressive for Good </span>
            </div>
            <Link className="underline italic text-coral">
              Click to see certification
            </Link>
          </li>
          <li className="flex flex-col gap-3">
            <div>
              <h1 className="text-3xl text-coral">
                Frontend (HTML/CSS/JavaScript)
              </h1>
              <span className="font-bold">Zuri | Ingressive for Good </span>
            </div>
            <Link
              to="https://w2pp.zuriboard.com/dashboard/certificate/41b6c30f-47f9-43b5-a166-cba3ff9849e2" target="_blank"
              className="underline italic text-coral"
            >
              Click to see certification
            </Link>
          </li>
        </ol>
        <hr className="border-s border-coral large:h-4/6 large:self-center" />
        <div className="flex large:flex-col gap-4 justify-center large:w-2/4 ">
          <Skills location={react} text="React" />
          <Skills location={tailwind} text="Tailwindcss" />
          <Skills location={html} text="HTML" />
          <Skills location={css} text="CSS" />
          <Skills location={git} text="Git" />
        </div>
      </div>
    </div>
  );
};

export default BootCamps;
