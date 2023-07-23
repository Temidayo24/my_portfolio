import React, { useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Project = ({ bg1, bg2, img, text, title, alt1, alt2, to1, to2, skillA, skillB, skillC, skillD }) => {
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <div className="large:h-cards h-cards2 w-full gap-2 large:gap-0 border-sm border-coral overflow-hidden rounded-[10px] hover:scale-y-105 ease-in-out large:basis-1/2 bg-black">
      <div className="relative large:h-full h-96 group ">
        <div className="group relative w-full h-cards2 large:h-cards transition-all group-hover:opacity-0 bg-black ">
          <video
            ref={videoRef}
            onClick={handleVideoPlay}
            muted
            autoPlay
            loop
            className="overflow-hidden large:h-cards h-cards2 w-full"
          >
            <source src={bg1} type="video/mp4" />
          </video>
          <img
            src={bg2}
            alt={alt1}
            className="h-96 w-96 transition-opacity group-hover:opacity-50 hidden"
          />
        </div>
        <div className="hidden group-hover:block group-hover: text-opacity-100 absolute z-100 left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-full text-black overflow-hidden transition-all delay-300 font-bold large:h-cards h-cards2 bg-eggshell">
          <div className="flex flex-col-reverse gap-4 w-full large:h-cards h-cards2 px-4 justify-center">
            <div className="flex">
              <Link to={to1} className="flex gap-2 w-full underline">
                <span>View site</span>

                <img
                  src={img}
                  alt={alt1}
                  className="cursor-pointer w-medium h-medium"
                />
              </Link>
              <Link to={to2} className="flex gap-2 w-full underline">
                <span>View code</span>
                <img
                  src={img}
                  alt={alt2}
                  className="cursor-pointer w-medium h-medium"
                />
              </Link>
            </div>
            <div className="flex gap-[2px]">
              <span className="text-react bg-black px-2 py-[2px] rounded-corners font-bold">
                {skillA}
              </span>
              <span className="text-html  bg-black px-2 py-[2px] rounded-corners font-bold">
                {skillB}
              </span>
              <span className="text-css  bg-black px-2 py-[2px] rounded-corners font-bold">
                {skillC}
              </span>
              <span className="text-js  bg-black px-2 py-[2px] rounded-corners font-bold">
                {skillD}
              </span>
            </div>
            <div className="flex flex-col h-1/5 large:gap-2">
              <span className="large:text-3xl text-2xl font-bold">{title}</span>
              <span className="large:text-xl text-base">{text}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
