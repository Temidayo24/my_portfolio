import React from 'react'

const Skills = ({location, text}) => {
  return (
    <div className="flex flex-col text-center items-center">
      <div className=" p-2 border-sm border-black bg-black w-fit self-center">
        <img src={location} className="w-10 m-auto large:m-0 " />
      </div>
      <span className="border-0 rounded-lg border-orange-500 rounded-2 px-2 large:text-l text-base font-bold text-black">
        {text}
      </span>
    </div>
  );
}

export default Skills