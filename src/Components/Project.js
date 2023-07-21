import React, { useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Project = ({ bg1, bg2, img, text, title, alt1, alt2, to1, to2 }) => {
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <div className="large:h-1/2 h-full w-full gap-2 large:gap-0 border-sm border-coral overflow-hidden rounded-corners2 hover:scale-y-105 ease-in-out large:basis-1/2 bg-black">
      <div className="relative large:h-full h-96 group ">
        <div className="group relative w-full h-full transition-all group-hover:opacity-20 bg-eggshell ">
          <video ref={videoRef} onClick={handleVideoPlay} muted autoPlay loop className="overflow-hidden ">
            <source src={bg1} type="video/mp4" />
          </video>
          <img
            src={bg2}
            alt={alt1}
            className="h-96 w-96 transition-opacity group-hover:opacity-50 hidden"
          />
        </div>
        <div className="hidden group-hover:block group-hover: text-opacity-100 absolute z-100 left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 top-1/2 w-full text-eggshell overflow-hidden transition-all delay-300 font-bold">
          <div className="flex flex-col-reverse gap-4 w-full h-full px-4 justify-center">
            <div className="flex">
              <Link to={to1} className="flex gap-2 w-full underline">
                <span>View site</span>

                <img
                  src={img}
                  alt={alt1}
                  className="cursor-pointer w-medium h-medium brightness-white invert"
                />
              </Link>
              <Link to={to2} className="flex gap-2 w-full underline">
                <span>View code</span>
                <img
                  src={img}
                  alt={alt2}
                  className="cursor-pointer w-medium h-medium brightness-100 invert"
                />
              </Link>
            </div>
            <div className="flex flex-col h-1/5 large:gap-2">
              <span className="text-xl font-bold">{title}</span>
              <span className="">{text}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
