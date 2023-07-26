import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import img from "../Assets/IMG-9523.JPG";
import Project from "../Components/Project";
import form from "../Assets/form.mp4";
import todo from "../Assets/todo.mp4";
import stars from "../Assets/stars.mp4";
import google from "../Assets/google.mp4";
import insta from "../Assets/instagram.mp4";
import udemy from "../Assets/udemy.mp4";
import netflix from "../Assets/netflix.mp4";
import loanwise from "../Assets/loanwise.mp4";
import arrow from "../Assets/arrow.png";
import git from "../Assets/git.svg";
import tailwind from "../Assets/tailwindcss.svg";
import html from "../Assets/html.svg";
import css from "../Assets/css.svg";
import react from "../Assets/react.svg";
import js from "../Assets/javascript.svg";
import code from "../Assets/code.svg";
import down from "../Assets/down.png";
import Skills from "../Components/Skills";
import tag from "../Assets/closetag.png";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";


const Home = () => {
  const texts = ["Hi!", "Bonjour!", "Ciao!", "Hola!"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const SERVICE_ID = "service_dsvmfcs";
  const TEMPLATE_ID = "template_kehinde";
  const PUBLIC_KEY = "p6oFaq8_ED7GKbCVl";

  const handleClick = () => {
    setDropdown(!dropdown);
  };

 const handleOnSubmit = (e) => {
   e.preventDefault();

   console.log("Form submitted!");

   emailjs
     .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
     .then((result) => {
       console.log("Email sent successfully:", result.text);
       Swal.fire({
         icon: "success",
         title: "Message Sent Successfully",
       });
     })
     .catch((error) => {
       console.error("Error sending email:", error);
       Swal.fire({
         icon: "error",
         title: "Ooops, something went wrong",
         text: "Error sending email. Please try again later.",
       });
     });

   e.target.reset();
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
      <Header
        scrolled={scrolled}
        dropdown={dropdown}
        handleClick={handleClick}
      />
      {/* End of Header Section */}

      <div className={dropdown ? "hidden" : "flex flex-col gap-0"}>
        {/* Home Section */}
        <div
          className="text-eggshell w-full h-full flex items-center justify-center large:h-screen mt-20 large:mt-0 large:px-[10%]"
          id="home"
        >
          <div className="flex large:flex-row-reverse flex-col-reverse large:gap-6 gap-0 items-center justify-center m-auto relative h-[100vh] large:h-full large:w-[90%]">
            <div className="large:w-1/2 relative h-[46vh] large:h-[65vh] self-center items-center">
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
                    <span className="text-[0.85em]">My name is </span>
                    <div className="type inline">
                      <span className="text-coral large:text-[65px] text-[36px] typing font-[Poppins]">
                        Temidayo Kehinde
                      </span>
                    </div>
                  </p>
                  <span className="large:text-xl text-sm text-right font-bold">
                    Front-End Web Developer{" "}
                    <img src={tag} className="inline large:w-10 pl-2 w-8" />
                  </span>
                </div>
                <div className="tracking-wide capitalize text-right flex flex-col gap-2 font-bold">
                  <p className="text-right large:w-[95%] w-[90%] self-end justify-right">
                    I am <span className="">passionate</span> about bridging the
                    gap between businesses and their customers by bringing{" "}
                    <span className=" "> user-friendly designs</span> to life
                    using <span className=""> lines of code.</span>
                  </p>
                  <Link className=" text-[16px] flex justify-right self-end italic font-bold">
                    <span className="text-html">
                      Discover<span className="text-js">Me</span>
                    </span>{" "}
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
          <div className="flex large:flex-col gap-[6px] large:text-start text-center large:text-[80px] text-2xl large:w-[35vw] text-black font-['Poppins'] font-bold">
            <span>About</span>
            <span>Me .</span>
          </div>
          <div className="h-full large:flex-row flex flex-col gap-8 large:w-[65vw] text-black">
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
                <span className="text-html font-extrabold bg-black px-[4px] font-[Poppins]">
                  HTML
                </span>
                ,{" "}
                <span className="text-css font-extrabold  bg-black px-[4px] font-[Poppins]">
                  CSS
                </span>
                , and{" "}
                <span className="text-js font-extrabold  bg-black px-[4px] font-[Poppins]">
                  JavaScript
                </span>
                . I've also gained experience in frameworks and libraries like{" "}
                <span className="text-react font-extrabold  bg-black px-[4px] font-[Poppins]">
                  ReactJs
                </span>{" "}
                and{" "}
                <span className="text-twc font-extrabold  bg-black px-[4px] font-[Poppins]">
                  TailwindCSS
                </span>
                , and can also collaborate well on{" "}
                <span className="text-[#f4511e] font-extrabold  bg-black px-[4px] font-[Poppins]">
                  Git
                </span>{" "}
                and{" "}
                <span className="text-coral font-extrabold  bg-black px-[4px] font-[Poppins]">
                  Github
                </span>
                . With every project I tackle, I strive to improve my
                problem-solving skills and enhance my ability to write clean and
                efficient code.
              </p>
              <p className="text-justify"></p>
              <p className="text-justify">
                My journey in the tech world has been nothing short of
                thrilling. I've learned to code, experiment with various dev
                tools, and stay updated with the latest trends and technologies.
                But most importantly, I've discovered a passion that drives me
                to continuously grow and explore new possibilities.
              </p>
              <p className="text-justify">
                So, if you're looking for someone is adaptable, teachable, and
                can translate designs perfectly, then I'm your person. Let's
                embark on this exciting journey together and create something
                remarkable!
              </p>
            </div>
            <div className="flex large:flex-col gap-[2px] large:w-2/4  align-center justify-center large:self-start w-full pt-[15px] pb-[5px] large:p-0">
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
            className=" flex large:flex-row flex-col h-full py-[7%] px-[5%] large:gap-[0px] gap-[10px]"
            id=""
          >
            <div className="flex large:flex-col gap-[6px] large:text-start text-center self-center large:self-start large:text-[80px] text-2xl large:w-[35vw] w-full  text-coral font-['Poppins'] font-bold">
              <span>My</span>
              <span>Projects .</span>
            </div>
            <div className="h-full grid large:grid-cols-2 gap-4 grid-col large:w-[65vw]">
              <Project
                to1="https://temi-starwars-app.netlify.app/"
                to2="https://github.com/Temidayo24/StarwarsReactProject-Stutern"
                bg1={loanwise}
                img={arrow}
                skillA="ReactJs"
                skillB="HTML"
                skillC="CSS"
                skillD=""
                title="LoanWise App"
                text="Collaborated with a team of developers and data scientists to build a loan prediction application."
              />
              <Project
                to1="https://temi-starwars-app.netlify.app/"
                to2="https://github.com/Temidayo24/StarwarsReactProject-Stutern"
                bg1={stars}
                img={arrow}
                skillA="ReactJs"
                skillB="HTML"
                skillC="CSS"
                title="Starwars"
                text="Cloned the starwars movie site page"
              />
              <Project
                to1="https://temiudemyclonesite.netlify.app/"
                to2="https://github.com/Temidayo24/Udemy-clone"
                bg1={udemy}
                img={arrow}
                skillB="HTML"
                skillC="CSS"
                title="Udemy"
                text="A Udemy landing page clone."
              />
              <Project
                to1="https://temi-instagramclone25.netlify.app/"
                to2="https://github.com/Temidayo24/Instagram-clone"
                bg1={insta}
                img={arrow}
                skillB="HTML"
                skillC="CSS"
                title="Instagram"
                text="Cloned Instagram web interface."
              />
              <Project
                to1="https://to-do-list-app-temi.netlify.app/"
                to2="https://github.com/Temidayo24/ToDo-List"
                bg1={todo}
                img={arrow}
                skillB="HTML"
                skillC="CSS"
                skillD="JS"
                title="To-Do List App"
                text="Built a CRUD application."
              />
              <Project
                to1="https://lionel-messi-clone.netlify.app/"
                to2="https://github.com/Temidayo24/Lionel-Messi-Google-Search-Clone"
                bg1={google}
                img={arrow}
                skillB="HTML"
                skillC="CSS"
                title="Google"
                text="Cloned the Google interface when you search for Lionel Messi."
              />
              <Project
                to1="https://temi-react-form.netlify.app/"
                to2="https://github.com/Temidayo24/ReactForm"
                bg1={form}
                img={arrow}
                skillB="HTML"
                skillC="CSS"
                skillD="JS"
                title="Form"
                text="Built a form that sends user data to an API endpoint."
              />
              <Project
                to1="https://temi-netflix-replica.netlify.app/"
                to2="https://github.com/Temidayo24/Stutern-Netflix-Assignment"
                bg1={netflix}
                img={arrow}
                skillB="HTML"
                skillC="CSS"
                title="Netflix"
                text="Cloned Netflix landing page."
              />
            </div>
          </div>
        </div>
        {/* End of Project Section */}

        {/*Start of Contact Section  */}
        <div id="contact">
          <div
            className=" flex large:flex-row flex-col h-full py-[7%] px-[5%] large:gap-[30px] gap-[10px] bg-eggshell"
            id=""
          >
            <div className="flex large:flex-col gap-[6px] large:text-start text-center self-center large:self-start large:text-[80px] text-2xl large:w-[35vw] w-full  text-black font-['Poppins'] font-bold">
              <span>Contact</span>
              <span>Me .</span>
            </div>
            <div className="h-full large:w-[65vw] border-sm border-black rounded-corners">
              <Form
                onSubmit={handleOnSubmit}
                className=" flex flex-col gap-2 p-[3%] w-full "
              >
                <Form.Field
                  className=" text-black flex flex-col w-full gap-[4px] font-bold"
                  id="form-input-control-email"
                  control={Input}
                  label="Email"
                  name="user_email"
                  placeholder="Email…"
                  required
                  icon="mail"
                  iconPosition="left"
                />

                <Form.Field
                  className=" text-black flex flex-col w-full gap-[4px] font-bold"
                  id="form-input-control-last-name"
                  control={Input}
                  label="Name"
                  name="user_name"
                  placeholder="Name…"
                  required
                  icon="user circle"
                  iconPosition="left"
                />

                <Form.Field
                  className=" text-black flex flex-col gap-[4px] font-bold"
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  label="Message"
                  name="user_message"
                  placeholder="Message…"
                  required
                />
                <Button
                  type="submit"
                  className="bg-black text-eggshell w-fit px-[10px] py-[5px] self-center rounded-[5px] font-bold"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
        {/* End of Contact Section */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
