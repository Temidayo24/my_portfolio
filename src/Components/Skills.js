import React from 'react'

const Skills = ({location, text}) => {
  return (
    <div className="large:flex text-center items-center animate-bounce">
      <div className=" p-2 ">
        <img src={location} className="w-10 m-auto large:m-0 " />
      </div>
      <span className="border-0 rounded-lg border-orange-500 rounded-2 px-2 text-l font-bold text-leather">
        {text}
      </span>
    </div>
  );
}

export default Skills