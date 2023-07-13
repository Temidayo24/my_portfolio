import React, { useState } from "react";
import Socials from "./Socials";
import twitter from "../twitter.svg";
import gitlogo from "../github.svg";
import linkedin from "../linkedin.svg";
import mail from "../email.png";
import call from "../call.png";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="flex justify-between gap-6 font-bold mt-5 p-10  bg-eggshell h-screen items-start">
      <div className="flex flex-col gap-6 font-bold text-xl">
        <NavLink
          exact
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#ff533d" : "#00301c",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/my_projects"
          style={({ isActive }) => ({
            color: isActive ? "#ff533d" : "#00301c",
          })}
        >
          Projects
        </NavLink>
        <NavLink
          to="/bootCamps"
          style={({ isActive }) => ({
            color: isActive ? "#ff533d" : "#00301c",
          })}
        >
          BootCamps & Skills
        </NavLink>
      </div>
      <div className="flex flex-col p-5 justify-end items-center bg-blue-centric gap-2">
        <Socials location={gitlogo} to="/git" alt="github" />
        <Socials location={linkedin} to="/git" alt="linkedin" />
        <Socials location={twitter} to="/git" alt="twitter" />
        <Socials location={mail} to="/git" alt="mail" />
        <Socials location={call} to="/git" alt="call" />
      </div>
    </div>
  );
};

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="flex justify-between px-6 py-4 text-eggshell text-sm large:text-base absolute w-full z-1000">
      {dropdown ? " " : <div className="text-eggshell">Temidayo Kehinde</div>}
      <div className="large:flex gap-6 font-bold hidden">
        <NavLink
          exact
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#ff533d" : "#fee8b0",
            borderBottom: isActive ? "2px solid #ff533d" : "none",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/my_projects"
          style={({ isActive }) => ({
            color: isActive ? "#ff533d" : "#fee8b0",
            borderBottom: isActive ? "2px solid #ff533d" : "none",
          })}
        >
          Projects
        </NavLink>
        <NavLink
          to="/bootCamps"
          style={({ isActive }) => ({
            color: isActive ? "#ff533d" : "#fee8b0",
            borderBottom: isActive ? "2px solid #ff533d" : "none",
          })}
        >
          BootCamps & Skills
        </NavLink>
      </div>
      <div className="large:flex hidden justify-end items-center gap-2">
        <Socials location={gitlogo} to="/git" alt="github" />
        <Socials location={linkedin} to="/git" alt="linkedin" />
        <Socials location={twitter} to="/git" alt="twitter" />
        <Socials location={mail} to="/git" alt="mail" />
        <Socials location={call} to="/git" alt="call" />
      </div>
      <div onClick={handleClick} className={dropdown ? "w-screen relative z-50" : "flex flex-col gap-2 large:hidden"}>
        <div className={dropdown ? "flex flex-col items-end" : "flex flex-col gap-2 large:hidden"}>
          <span
            className={
              dropdown
                ? "w-8 h-0.5 bg-coral block rotate-45"
                : "w-8 h-0.5 bg-eggshell block"
            }
          ></span>
          <span
            className={dropdown ? "hidden" : "w-8 h-0.5 bg-eggshell block"}
          ></span>
          <span
            className={
              dropdown
                ? "w-8 h-0.5 bg-coral block -rotate-45"
                : "w-8 h-0.5 bg-eggshell block"
            }
          ></span>
        </div>
        {dropdown && <Dropdown />}
      </div>
    </div>
  );
};

export default Header;
