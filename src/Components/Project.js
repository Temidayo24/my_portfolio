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
    <div className="large:h-more h-half w-full flex flex-row gap-2 border-sm border-eggshell overflow-hidden rounded-corners large:gap-6 hover:scale-y-105 ease-in-out">
      <div className="relative large:h-full h-96 group ">
        <div className="group relative w-full h-full transition-all group-hover:opacity-40 bg-eggshell ">
          <video ref={videoRef} onClick={handleVideoPlay} muted autoPlay loop className="overflow-hidden">
            <source src={bg1} type="video/mp4" />
          </video>
          <img
            src={bg2}
            alt={alt1}
            className="h-full w-fit transition-opacity group-hover:opacity-50"
          />
        </div>
        <div className="hidden group-hover:block absolute z-100 left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 top-1/2 w-full text-eggshell overflow-hidden transition-all delay-300">
          <div className="flex flex-col-reverse gap-2 w-full h-full px-4 justify-center">
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
