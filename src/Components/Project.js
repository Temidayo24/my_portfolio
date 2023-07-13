import React, { useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Project = ({ bg1, img1, img2, text, title, alt1, alt2 }) => {
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="h-4/5 w-full flex flex-col gap-2 large:gap-6 ">
      <div className="relative border-4 border-coral h-3/5 group ">
        <video ref={videoRef} onClick={handleVideoPlay} muted autoPlay loop>
          <source
            src={bg1}
            type="video/mp4"
            className="group relative w-full h-fit transition-opacity group-hover:opacity-50"
          />
        </video>
        <div className="hidden group-hover:block absolute z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col w-full h-full bg-blue-centric rounded-full px-4 justify-center">
            <Link to="">
              <img src={img1} alt={alt1} className="logo-icon cursor-pointer" />
            </Link>
            <Link to="">
              <img src={img2} alt={alt2} className="logo-icon cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-1/5 large:gap-2">
        <span className="text-eggshell text-xl font-bold">{title}</span>
        <span className="text-coral">{text}</span>
      </div>
    </div>
  );
};

export default Project;
