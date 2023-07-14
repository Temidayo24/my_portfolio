import React from "react";
import Header from "../Components/Header";
import Project from "../Components/Project";
import form from "../form.mp4";
import formimg from "../reactForm.png";
import todo from "../todo.mp4";
import todoimg from "../todo.png";
import stars from "../stars.mp4";
import starsimg from "../starwars.png";
import google from "../google.mp4";
import googleimg from "../google.png";
import insta from "../instagram.mp4";
import udemy from "../udemy.mp4";
import arrow from "../arrow.png";
import Footer from "../Components/Footer";

const Projects = () => {
  return (
    <div className="bg-black h-full large:h-full text-white flex flex-col">
      <Header />
      <div className="large:mt-20 large:h-full large:w-4/5  w-5/6 px-5 py-16 grid large:grid-cols-2 large:gap-4 gap-4 place-content-center justify-center mx-auto mt-20">
        <Project
          bg1={stars}
          img={arrow}
          title="Starwars"
          text="Cloned the starwars movie site page using React and CSS"
        />
        <Project
          bg1={udemy}
          img={arrow}
          title="Udemy"
          text="A Udemy landing page clone using HTML and CSS"
        />
        <Project
          bg1={todo}
          img={arrow}
          title="To-Do List App"
          text="Built a CRUD application with HTML, CSS and JavaScript."
        />
        <Project
          bg1={insta}
          img={arrow}
          title="Instagram"
          text="Cloned the Instagram web interface using HTML and Javascript"
        />

        <Project
          bg1={google}
          img={arrow}
          title="Google"
          text="Cloned the Google interface when you search for Lionel Messi using HTML and CSS"
        />
        <Project
          bg1={form}
          img={arrow}
          title="Form"
          text="Built a form that sends user data to an API endpoint"
        />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Projects;
