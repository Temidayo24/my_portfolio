import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Typography, Button } from "@material-tailwind/react";
import img from "./../IMG-8999.jpg";
import Project from "../Components/Project";
import form from "../form.mp4";
import todo from "../todo.mp4";
import stars from "../stars.mp4";
import google from "../google.mp4";
import insta from "../instagram.mp4";
import udemy from "../udemy.mp4";
import netflix from "../netflix.mp4";
import arrow from "../arrow.png";
import git from "./../git.png";
import tailwind from "./../tailwind.png";
import html from "./../html-5.png";
import css from "./../css-3.png";
import react from "./../react.png";
import Skills from "../Components/Skills";
import tag from "../closetag.png";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Socials from "../Components/Socials";
import twitter from "../twitter.svg";
import gitlogo from "../github.svg";
import linkedin from "../linkedin.svg";
import mail from "../email.png";
import call from "../call.png";
import menu from "../menu.png";
import close from "../close.svg";

const Dropdown = () => {
  return (
    <div className="flex justify-between gap-6 font-bold mt-5 p-10  bg-eggshell h-screen items-start">
      <div className="flex flex-col gap-6 font-bold text-xl">
        <Link
          exact
          to="/"
          // style={({ isActive }) => ({
          //   color: isActive ? "#ff533d" : "#00301c",
          // })}
        >
          Home
        </Link>
        <Link
          to="/my_projects"
          // style={({ isActive }) => ({
          //   color: isActive ? "#ff533d" : "#00301c",
          // })}
        >
          Projects
        </Link>
        <Link
          to="/bootCamps"
          // style={({ isActive }) => ({
          //   color: isActive ? "#ff533d" : "#00301c",
          // })}
        >
          BootCamps & Skills
        </Link>
      </div>
      <div className="flex flex-col p-5 justify-end items-center bg-coral gap-2">
        <Socials
          location={gitlogo}
          to="https://github.com/temidayo24"
          alt="github"
        />
        <Socials
          location={linkedin}
          to="https://www.linkedin.com/temidayokehinde"
          alt="linkedin"
        />
        <Socials location={twitter} to="/git" alt="twitter" />
        <Socials location={mail} to="/git" alt="mail" />
        <Socials location={call} to="/git" alt="call" />
      </div>
    </div>
  );
};

const Home = () => {
  const texts = ["Hi!", "Bonjour!", "Ciao!", "Hola!"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);

    return () => clearInterval(timer);
  }, [texts.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate conditions for triggering transitions
      if (scrollPosition > 100) {
        // Add CSS class to elements to trigger transitions
        document.getElementById("bootcamp").classList.add("jump");
      } else {
        // Remove CSS class to reset transitions
        document.getElementById("bootcamp").classList.remove("jump");
      }

      if (scrollPosition > 300) {
        // Add CSS class to elements to trigger transitions for scroll position 2
        document.getElementById("project").classList.add("jump");
      } else {
        // Remove CSS class to reset transitions for scroll position 2
        document.getElementById("project").classList.remove("jump");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black w-full m-0 text-eggshell h-full relative flex flex-col gap-0 ">
      <div
        className={`flex justify-between px-4 py-4 text-eggshell large:text-base fixed w-full z-100 ${
          scrolled ? "z-50 backdrop-blur-md" : ""
        }`}
      >
        <div className="flex justify-between w-1/2">
          {dropdown ? (
            " "
          ) : (
            <Link to="/" className="text-eggshell text-sm large:text-lg">
              Temidayo Kehinde
            </Link>
          )}
          <div className="large:flex gap-6 hidden text-sm font-bold">
            <Link
              to=""
              // style={({ isActive }) => ({
              //   color: isActive ? "#ff533d" : "#f5f5f5",
              //   borderBottom: isActive ? "2px solid #ff533d" : "none",
              // })}
            >
              Home
            </Link>
            <Link
              to=""
              activeClassName = "bg-coral"
              // style={({ isActive }) => ({
              //   color: isActive ? "#ff533d" : "#f5f5f5",
              //   borderBottom: isActive ? "2px solid #ff533d" : "none",
              // })}
            >
              About
            </Link>
            <Link
              to="#Project"
              // style={({ isActive }) => ({
              //   color: isActive ? "#ff533d" : "#f5f5f5",
              //   borderBottom: isActive ? "2px solid #ff533d" : "none",
              // })}
            >
              Projects
            </Link>
            <Link
              to="#education"
              // style={({ isActive }) => ({
              //   color: isActive ? "#ff533d" : "#f5f5f5",
              //   borderBottom: isActive ? "2px solid #ff533d" : "none",
              // })}
            >
              Education
            </Link>
          </div>
        </div>
        <div className="large:flex hidden justify-end items-center gap-2">
          <Socials
            location={gitlogo}
            to="https://github.com/temidayo24"
            alt="github"
          />
          <Socials
            location={linkedin}
            to="www.linkedin.com/temidayokehinde"
            alt="linkedin"
          />
          <Socials location={twitter} to="/git" alt="twitter" />
          <Socials location={mail} to="/git" alt="mail" />
          <Socials location={call} to="/git" alt="call" />
        </div>
        <div
          onClick={handleClick}
          className={
            dropdown
              ? "w-screen relative z-50"
              : "flex flex-col gap-2 text-xl large:hidden items-end"
          }
        >
          <img
            src={dropdown ? close : menu}
            className="w-8  self-end justify-end"
          />
          {dropdown && <Dropdown />}
        </div>
      </div>
      <div className="text-eggshell w-full h-full m-auto flex items-center h-screen" id="education">
        <div className="flex large:flex-row-reverse flex-col gap-6 items-center justify-center pr-10 pl-2 large:px-0 ">
          <img
            src={img}
            className="w-5/6 h-screen animate-wiggle hidden large:block slide self-center opacity-70 hover:opacity-100"
          />
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex flex-col justify-center ">
              <p className="large:text-2xl text-xl flex-col w-full text-right">
                <span className=" text-coral text-2xl large:text-3xl">
                  {/* {texts[currentTextIndex]}{" "} */}
                  Hi!
                </span>
                <br />
                <span className="div">My name is </span>
                <div className="type inline">
                  <span className="text-coral large:text-5xl text-3xl typing">
                    Temidayo Kehinde
                  </span>
                </div>
              </p>
              <span className="large:text-xl text-sm text-right">
                Front-End Web Developer{" "}
                <img src={tag} className="inline large:w-10 pl-2 w-8" />
              </span>
            </div>
            <div className="tracking-wide capitalize text-right w-5/6 large:text-lg flex flex-col gap-4 self-end">
              <p className="text-right">
                I am <span className="">passionate</span> about bridging the gap
                between businesses and their customers by bringing{" "}
                <span className=" "> user-friendly designs</span> to life using{" "}
                <span className=""> codes.</span>
              </p>
              <p>
                <span className="">
                  Eating. <span className="text-eggshell">Coding. </span>{" "}
                  Singing.
                </span>
                <br />
                ...These three things make me happy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative backdrop-blur-md" id="Project">
        {/* <div className="bg-coral absolute inset-0"></div> */}
        <div
          className=" flex large:flex-row flex-col gap-8 h-full pt-16 pb-10 px-6 "
          id="bootcamp"
        >
          <div className="text-center text-2xl  text-coral">Education .</div>
          <div className="h-full large:flex-row flex flex-col justify-center gap-8">
            <ol className="text-eggshell flex large:flex-row flex-col gap-8 large:text-right text-center ">
              <li className="flex flex-col gap-3">
                <div>
                  <h1 className="large:text-3xl text-2xl text-eggshell">
                    Intro to Programming
                  </h1>
                  <span className="text-coral">Udacity | access </span>
                </div>
                <Link className="underline italic text-eggshell text-md">
                  Certification in progress
                </Link>
              </li>
              <li className="flex flex-col gap-3">
                <div>
                  <h1 className="large:text-3xl text-2xl text-eggshell">
                    Software Development{" "}
                  </h1>
                  <span className="text-coral">
                    Stutern | Ingressive for Good{" "}
                  </span>
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
                  <span className="text-coral">
                    Zuri | Ingressive for Good{" "}
                  </span>
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
            {/* <div className="flex large:flex-col gap-4 large:w-2/4">
              <Skills location={react} text="React" />
              <Skills location={tailwind} text="Tailwindcss" />
              <Skills location={html} text="HTML" />
              <Skills location={css} text="CSS" />
              <Skills location={git} text="Git" />
            </div> */}
          </div>
        </div>
      </div>
      <div
        id="project"
        className="flex large:flex-row flex-col gap-8 large:px-6 large:pt-20 pt-10"
      >
        <div className="text-center  text-coral text-2xl">My Projects .</div>
        <div className=" large:h-full large:w-4/5  w-project pb-16 grid large:grid-cols-2 large:gap-4 gap-4 place-content-center justify-center mx-auto">
          <Project
            to1="https://temi-starwars-app.netlify.app/"
            to2="https://github.com/Temidayo24/StarwarsReactProject-Stutern"
            bg1={stars}
            img={arrow}
            title="Starwars"
            text="Cloned the starwars movie site page using React and CSS"
          />
          <Project
            to1="https://temiudemyclonesite.netlify.app/"
            to2="https://github.com/Temidayo24/Udemy-clone"
            bg1={udemy}
            img={arrow}
            title="Udemy"
            text="A Udemy landing page clone using HTML and CSS"
          />
          <Project
            to1="https://temi-instagramclone25.netlify.app/"
            to2="https://github.com/Temidayo24/Instagram-clone"
            bg1={insta}
            img={arrow}
            title="Instagram"
            text="Cloned Instagram web interface using HTML and CSS"
          />
          <Project
            to1="https://to-do-list-app-temi.netlify.app/"
            to2="https://github.com/Temidayo24/ToDo-List"
            bg1={todo}
            img={arrow}
            title="To-Do List App"
            text="Built a CRUD application with HTML, CSS and JavaScript."
          />
          <Project
            to1="https://lionel-messi-clone.netlify.app/"
            to2="https://github.com/Temidayo24/Lionel-Messi-Google-Search-Clone"
            bg1={google}
            img={arrow}
            title="Google"
            text="Cloned the Google interface when you search for Lionel Messi using HTML and CSS"
          />
          <Project
            to1="https://temi-react-form.netlify.app/"
            to2="https://github.com/Temidayo24/ReactForm"
            bg1={form}
            img={arrow}
            title="Form"
            text="Built a form that sends user data to an API endpoint"
          />
          <Project
            to1="https://temi-netflix-replica.netlify.app/"
            to2="https://github.com/Temidayo24/Stutern-Netflix-Assignment"
            bg1={netflix}
            img={arrow}
            title="Netflix"
            text="Cloned Netflix landing page with HTML and CSS"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
