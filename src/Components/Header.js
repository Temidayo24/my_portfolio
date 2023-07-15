import React, { useState } from "react";
import Socials from "./Socials";
import twitter from "../twitter.svg";
import gitlogo from "../github.svg";
import linkedin from "../linkedin.svg";
import mail from "../email.png";
import call from "../call.png";
import menu from "../menu.png";
import close from "../close.svg";
import { Link, NavLink } from "react-router-dom";

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
      <div className="flex flex-col p-5 justify-end items-center bg-coral gap-2">
        <Socials
          location={gitlogo}
          to="https://github.com/temidayo24"
          alt="github"
        />
        <Socials
          location={linkedin}
          to="https://www.linkedin.com/temidayokehinde"
          alt="linkedin"
        />
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
    <div className="flex justify-between px-4 py-4 text-eggshell large:text-base absolute w-full z-1000">
      <div className="flex justify-between w-1/2">
        {dropdown ? (
          " "
        ) : (
          <Link to="/" className="text-eggshell text-sm large:text-lg">
            Temidayo Kehinde
          </Link>
        )}
        <div className="large:flex gap-6 hidden text-sm font-bold">
          <NavLink
            exact
            to=""
            style={({ isActive }) => ({
              color: isActive ? "#ff533d" : "#f5f5f5",
              borderBottom: isActive ? "2px solid #ff533d" : "none",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to=""
            style={({ isActive }) => ({
              color: isActive ? "#ff533d" : "#f5f5f5",
              borderBottom: isActive ? "2px solid #ff533d" : "none",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="#Project"
            style={({ isActive }) => ({
              color: isActive ? "#ff533d" : "#f5f5f5",
              borderBottom: isActive ? "2px solid #ff533d" : "none",
            })}
          >
            Projects
          </NavLink>
          <NavLink
            to="/bootCamps"
            style={({ isActive }) => ({
              color: isActive ? "#ff533d" : "#f5f5f5",
              borderBottom: isActive ? "2px solid #ff533d" : "none",
            })}
          >
            Education
          </NavLink>
        </div>
      </div>
      <div className="large:flex hidden justify-end items-center gap-2">
        <Socials
          location={gitlogo}
          to="https://github.com/temidayo24"
          alt="github"
        />
        <Socials
          location={linkedin}
          to="www.linkedin.com/temidayokehinde"
          alt="linkedin"
        />
        <Socials location={twitter} to="/git" alt="twitter" />
        <Socials location={mail} to="/git" alt="mail" />
        <Socials location={call} to="/git" alt="call" />
      </div>
      <div
        onClick={handleClick}
        className={
          dropdown
            ? "w-screen relative z-50"
            : "flex flex-col gap-2 text-xl large:hidden items-end"
        }
      >
        <img
          src={dropdown ? close : menu}
          className="w-8  self-end justify-end"
        />
        {dropdown && <Dropdown />}
      </div>
    </div>
  );
};

export default Header;
