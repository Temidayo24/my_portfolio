import React, { useState } from "react";
import logo from "./../logo.svg.svg";
import Socials from "./Socials";
import twitter from "../twitter.svg";
import gitlogo from "../github.svg";
import linkedin from "../linkedin.svg";
import mail from "../email.png";
import call from "../call.svg";
import menu from "../menu.svg";
import close from "../close.svg";
import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = ({ scrolled, dropdown, handleClick }) => {
  const Dropdown = () => {
    return (
      <div className="w-full  bg-eggshell h-screen items-start">
        <div className="flex justify-between gap-6 font-bold border-sm border-black p-[5%] m-[5%] h-[90vh]">
          <div className="flex flex-col gap-6 font-bold text-lg text-black h-fit">
            <Nav text="Home" to="/#home" />
            <Nav text="About" to="/#about" />
            <Nav text="Projects" to="/#project" />
            <Nav text="Contact" to="/#contact" />
          </div>
          <div className="flex flex-col p-4 self-start items-center bg-black gap-2 h-fit">
            <Socials
              location={gitlogo}
              to="https://github.com/temidayo24"
              alt="github"
              scrolled={scrolled}
            />
            <Socials
              location={linkedin}
              to="https://www.linkedin.com/temidayokehinde"
              alt="linkedin"
              scrolled={scrolled}
            />
            <Socials
              location={twitter}
              to="https://twitter.com/ade_bi_ke"
              alt="twitter"
              scrolled={scrolled}
            />
            <Socials
              location={mail}
              to="mailto:temidayo.kehinde.10@gmail.com"
              alt="mail"
              scrolled={scrolled}
            />
            <Socials
              location={call}
              to="https://wa.me/2348188171838"
              alt="call"
              scrolled={scrolled}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      className={`flex justify-between px-[3%] py-[10px] text-eggshell font-bold large:text-[1.1em] fixed w-full z-100 ${
        scrolled && !dropdown ? "z-50 bg-coral border-b-[1px] border-black" : ""
      } ${dropdown ? "bg-black" : ""}`}
    >
      {dropdown ? (
        " "
      ) : (
        <Link to="/" className="text-eggshell text-sm large:text-md font-bold">
          <img
            src={logo}
            alt="my logo"
            className={`large:w-[48px] w-[32px] ${scrolled ? "change" : ""}`}
          />
        </Link>
      )}
      <div
        className={`large:flex gap-6 hidden font-bold items-center ${
          scrolled ? "text-black" : " "
        }`}
      >
        <Nav text="Home" to="/#home" />
        <Nav text="About" to="/#about" />
        <Nav text="Projects" to="/#project" />
        <Nav text="Contact" to="/#contact" />
      </div>
      <div className="large:flex hidden justify-end items-center gap-5">
        <Socials
          location={gitlogo}
          to="https://github.com/temidayo24"
          alt="github"
          scrolled={scrolled}
        />
        <Socials
          location={linkedin}
          to="https://www.linkedin.com/in/temidayokehinde"
          alt="linkedin"
          scrolled={scrolled}
        />
        <Socials
          location={twitter}
          to="https://twitter.com/ade_bi_ke"
          alt="twitter"
          scrolled={scrolled}
        />
        <Socials
          location={mail}
          to="mailto:temidayo.kehinde.10@gmail.com"
          alt="mail"
          scrolled={scrolled}
        />
        <Socials
          location={call}
          to="https://wa.me/2348188171838"
          alt="call"
          scrolled={scrolled}
        />
      </div>
      <div
        onClick={handleClick}
        className={
          dropdown
            ? "w-screen flex flex-col gap-4 large:items-center"
            : "text-xl large:hidden items-end"
        }
      >
        <img
          src={dropdown ? close : menu}
          className={
            scrolled
              ? "w-8  self-end justify-end large:items-center"
              : "w-8  self-end justify-end change"
          }
          onClick={handleClick}
        />
        {dropdown && <Dropdown />}
      </div>
    </div>
  );
};

export default Header;
