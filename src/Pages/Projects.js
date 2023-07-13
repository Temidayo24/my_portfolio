import React from 'react'
import Header from '../Components/Header'
import Project from '../Components/Project'
import form from "../reactForm.png"
import todo from "../todo.mp4"
import stars from "../stars.mp4"
import google from "../google.mp4"
import insta from "../Insta.mp4"
import udemy from "../udemy.mp4"
import git from "../github.svg"
import browser from "../broswer.png"
import left from "../chevronleft.png"
import right from "../chevronright.png"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../Components/Footer'

const Projects = () => {

    const  renderArrowPrev = (onClickHandler, hasPrev, label) => {
<button
type="button"
onClick={onClickHandler}>
  <img src={left} />
</button>;
    }


  return (
    <div className="bg-blue-centric h-full large:h-screen text-eggshell flex flex-col">
      <Header />
      <div className="large:p-20 large:h-screen  px-5 pt-16 h-full">
        <Carousel
          className="w-full pt-10 h-full flex"
          useKeyboardArrows
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          dynamicHeight={true}
        >
          <div className="flex flex-col gap-8 large:gap-4 large:flex-row">
            <Project
              bg1={stars}
              img1={browser}
              img2={git}
              title="Starwars Clone"
              text="(React + CSS)"
            />
            <Project
              bg1={todo}
              img1={browser}
              img2={git}
              title="To-Do List App"
              text="(HTML + CSS + JS)"
            />
          </div>
          <div className="flex flex-col gap-8 large:gap-4 large:flex-row ">
            <Project
              bg1={udemy}
              img1={browser}
              img2={git}
              title="Udemy Clone"
              text="(HTML + CSS + JS)"
            />
            <Project
              bg1={insta}
              img1={browser}
              img2={git}
              title="Instagram Clone"
              text="(HTML + CSS)"
            />
          </div>
          <div className="flex flex-col gap-8 large:gap-4 large:flex-row ">
            <Project
              bg1={google}
              img1={browser}
              img2={git}
              title="Google Search Clone"
              text="(HTML + CSS)"
            />
            <Project
              bg1={form}
              img1={browser}
              img2={git}
              title="Contact Us Form"
              text="(React + CSS)"
            />
          </div>
        </Carousel>
      </div>
      <Footer/>
    </div>
  );
}

export default Projects