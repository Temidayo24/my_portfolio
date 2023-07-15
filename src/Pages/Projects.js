import React from "react";
import Header from "../Components/Header";
import Project from "../Components/Project";
import form from "../form.mp4";
import todo from "../todo.mp4";
import stars from "../stars.mp4";
import google from "../google.mp4";
import insta from "../instagram.mp4";
import udemy from "../udemy.mp4";
import netflix from "../netflix.mp4";
import arrow from "../arrow.png";

const Projects = () => {
  return (
    <div className="bg-black h-full large:h-full text-white flex flex-col">
      <Header />
      <div className="large:mt-20 large:h-full large:w-4/5  w-project py-16 grid large:grid-cols-2 large:gap-4 gap-4 place-content-center justify-center mx-auto mt-10 jump">
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
      {/* <Footer/> */}
    </div>
  );
};

export default Projects;
