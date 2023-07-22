import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img from "./../IMG-9523.JPG";
import Project from "../Components/Project";
import form from "../form.mp4";
import todo from "../todo.mp4";
import stars from "../stars.mp4";
import google from "../google.mp4";
import insta from "../instagram.mp4";
import udemy from "../udemy.mp4";
import netflix from "../netflix.mp4";
import loanwise from "../loanwise.mp4"
import arrow from "../arrow.png";
import git from "./../git.svg";
import tailwind from "./../tailwindcss.svg";
import html from "./../html.svg";
import css from "./../css.svg";
import react from "./../react.svg";
import js from "./../javascript.svg";
import code from "./../code.svg";
import logo from "./../logo.svg.svg"
import down from "./../down.png";
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
import menu from "../menu.svg";
import close from "../close.svg";
import { HashLink, NavHashLink } from "react-router-hash-link";
import Nav from "../Components/Nav";


const Home = () => {

const Dropdown = () => {
  return (
    <div>
      <div className="flex justify-between gap-6 font-bold px-[10%] pt-[10%] w-full  bg-eggshell h-screen items-start ">
        <div className="flex flex-col gap-6 font-bold text-lg text-black">
          <Nav text="Home" to="/#home" />
          <Nav text="About" to="/#about" />
          <Nav text="Projects" to="/#project" />
          <Nav text="Contact" to="/#contact" />
        </div>
        <div className="flex flex-col p-4 justify-end items-center bg-black gap-2">
          <Socials
            location={gitlogo}
            to="https://github.com/temidayo24"
            alt="github"
            scrolled={scrolled}
          />
          <Socials
            location={linkedin}
            to="https://www.linkedin.com/temidayokehinde"
            alt="linkedin"
            scrolled={scrolled}
          />
          <Socials
            location={twitter}
            to="/git"
            alt="twitter"
            scrolled={scrolled}
          />
          <Socials location={mail} to="/git" alt="mail" scrolled={scrolled} />
          <Socials location={call} to="/git" alt="call" scrolled={scrolled} />
        </div>
      </div>
    </div>
  );
};

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
        // Add CSS class to elements to trigger transitions for scroll position 2
        document.getElementById("about").classList.add("jump");
      } else {
        // Remove CSS class to reset transitions for scroll position 2
        document.getElementById("about").classList.remove("jump");
      }

      // if (scrollPosition > 400) {
      //   // Add CSS class to elements to trigger transitions for scroll position 2
      //   document.getElementById("education").classList.add("jump");
      // } else {
      //   // Remove CSS class to reset transitions for scroll position 2
      //   document.getElementById("education").classList.remove("jump");
      // }

      if (scrollPosition > 500) {
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
      {/* Header Section */}
      <div
        className={`flex justify-between px-[3%] py-[10px] text-eggshell font-bold large:text-[1.1em] fixed w-full z-100 ${
          scrolled ? "z-50 bg-coral border-b-[1px] border-black" : ""
        }`}
      >
        {dropdown ? (
          " "
        ) : (
          <Link
            to="/"
            className="text-eggshell text-sm large:text-md font-bold"
          >
            <img src={logo} alt="my logo" className={`large:w-[48px] w-[32px] ${scrolled ? "change" : ""}`}/>
          </Link>
        )}
        <div
          className={`large:flex gap-6 hidden font-bold items-center ${
            scrolled ? "text-black" : " "
          }`}
        >
          <Nav text="Home" to="/#home" />
          <Nav text="About" to="/#about" />
          <Nav text="Projects" to="/#project" />
          <Nav text="Contact" to="/#contact" />
        </div>
        <div className="large:flex hidden justify-end items-center gap-5">
          <Socials
            location={gitlogo}
            to="https://github.com/temidayo24"
            alt="github"
            scrolled={scrolled}
          />
          <Socials
            location={linkedin}
            to="https://www.linkedin.com/temidayokehinde"
            alt="linkedin"
            scrolled={scrolled}
          />
          <Socials
            location={twitter}
            to="/git"
            alt="twitter"
            scrolled={scrolled}
          />
          <Socials location={mail} to="/git" alt="mail" scrolled={scrolled} />
          <Socials location={call} to="/git" alt="call" scrolled={scrolled} />
        </div>
        <div
          onClick={handleClick}
          className={
            dropdown
              ? "w-screen flex flex-col gap-4 large:items-center"
              : "text-xl large:hidden items-end"
          }
        >
          <img
            src={dropdown ? close : menu}
            className={
              scrolled
                ? "w-8  self-end justify-end large:items-center"
                : "w-8  self-end justify-end change"
            }
            onClick={handleClick}
          />
          {dropdown && <Dropdown />}
        </div>
      </div>
      {/* End of Header Section */}

      {/* Home Section */}
      <div
        className={
          dropdown
            ? "hidden"
            : "text-eggshell w-full h-full flex items-center justify-center large:h-screen mt-20 large:mt-0 large:px-[10%]"
        }
        id="home"
      >
        <div className="flex large:flex-row-reverse flex-col-reverse large:gap-6 gap-0 items-center justify-center m-auto relative h-[100vh] large:h-full">
          <div className="large:w-1/2 relative h-[46vh] large:h-[60vh]">
            <img
              src={img}
              className="relative large:w-cards large:h-cards z-10 h-cards2 w-cards2 m-auto large:m-0 animate-wiggle slide opacity-70 hover:opacity-100 border-sm border-coral"
            />
            <div className="large:h-cards large:w-cards h-cards2 w-cards2 z-0 bg-coral absolute top-[5%] left-[5%] border-white border-sm"></div>
          </div>
          <div className="h-[60vh]  large:w-1/2  large:h-full flex pr-8 pl-2 large:px-0">
            <div className="flex flex-col gap-4 self-center">
              <div className="flex flex-col justify-items-center justify-self-center w-full h-full ">
                <p className="large:text-2xl text-xl flex-col w-full text-right">
                  <span className=" text-coral text-2xl large:text-3xl">
                    {texts[currentTextIndex]}{" "}
                  </span>
                  <br />
                  <span className="text-[14px]">My name is </span>
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
              <div className="tracking-wide capitalize text-right large:text-lg flex flex-col gap-2">
                <p className="text-right large:w-[95%] w-[90%] self-end justify-right">
                  I am <span className="">passionate</span> about bridging the
                  gap between businesses and their customers by bringing{" "}
                  <span className=" "> user-friendly designs</span> to life
                  using <span className=""> codes.</span>
                </p>
                <Link className="underline text-[16px] flex justify-right self-end">
                  <span>Get to Know me better</span>{" "}
                  <img src={down} className="animate-bounce w-[24px]" />
                </Link>
                {/* <p>
                <span className="">
                  Eating. <span className="text-eggshell">Coding. </span>{" "}
                  Singing.
                </span>
                <br />
                ...These three things make me happy.
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Home Section */}

      {/* About Section */}
      <div
        className={
          dropdown
            ? "bg-black"
            : "bg-eggshell flex large:flex-row flex-col h-full py-[7%] px-[5%] justify-between"
        }
        id="about"
      >
        <div className="flex large:flex-col gap-[6px] large:text-start text-center large:text-[80px] text-2xl large:w-fit text-black font-['Poppins'] font-bold">
          <span>About</span>
          <span>Me .</span>
        </div>
        <div className="h-full large:flex-row flex flex-col gap-8 large:w-[60vw] text-black font-bold">
          <div className="flex flex-col gap-2 text-justify large:text-lg">
            <p className="text-justify">
              Hi there! I'm thrilled to introduce myself and share my journey
              with you. I may not have started with a STEM background, but I
              stumbled upon the fascinating world of technology and instantly
              fell in love.
            </p>
            <p className="text-justify">
              During my learning journey, I've acquired a solid foundation in
              various programming languages, such as{" "}
              <span className="text-coral font-bold">HTML</span>,{" "}
              <span className="text-coral font-bold">CSS</span>, and
              <span className="text-coral font-bold"> JavaScript</span>. I've
              also gained experience in frameworks and libraries like{" "}
              <span className="text-coral font-bold">React</span> and
              <span className="text-coral font-bold"> TailwindCSS</span> and can
              also collaborate well on Git and GitHub. With every project I
              tackle, I strive to improve my problem-solving skills and enhance
              my ability to write clean and efficient code.
            </p>
            <p className="text-justify"></p>
            <p className="text-justify">
              My journey in the tech world has been nothing short of thrilling.
              I've learned to code, experiment with various dev tools, and stay
              updated with the latest trends and technologies. But most
              importantly, I've discovered a passion that drives me to
              continuously grow and explore new possibilities.
            </p>
            <p className="text-justify">
              So, if you're looking for someone who can bring a fresh
              perspective, combine technology and design seamlessly, and create
              an enjoyable atmosphere, then I'm your person. Let's embark on
              this exciting journey together and create something remarkable!
            </p>
          </div>
          <div className="flex large:flex-col gap-[2px] large:w-2/4  align-center justify-center large:self-start w-full pt-[15px] pb-[5px]">
            <Skills location={html} />
            <Skills location={css} />
            <Skills location={js} />
            <Skills location={react} />
            <Skills location={tailwind} />
            <Skills location={code} />
            <Skills location={git} />
          </div>
        </div>
      </div>
      {/* End of About Section */}

      {/* Project section */}
      <div id="project">
        <div
          className=" flex large:flex-row flex-col h-full py-[7%] px-[5%] large:gap-[30px] gap-[10px]"
          id=""
        >
          <div className="flex large:flex-col gap-[6px] large:text-start text-center self-center large:self-start large:text-[80px] text-2xl large:w-fit w-full  text-coral font-['Poppins'] font-bold">
            <span>My</span>
            <span>Projects .</span>
          </div>
          <div className="h-full grid large:grid-cols-2 gap-4 grid-col large:w-[60vw]">
            <Project
              to1="https://temi-starwars-app.netlify.app/"
              to2="https://github.com/Temidayo24/StarwarsReactProject-Stutern"
              bg1={loanwise}
              img={arrow}
              title="LoanWise App"
              text="Collaborated with a team of developers and data scientists to build a loan prediction application."
            />
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
      </div>
      {/* End of Project Section */}
      <Footer />
    </div>
  );
};

export default Home;
