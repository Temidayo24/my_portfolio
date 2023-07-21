import React from "react";
import { Link } from "react-router-dom";

const Socials = ({ to, location, alt, scrolled }) => {
  return (
    <Link to={to} target="_blank">
      <img src={location} alt={alt} className= {`large:w-[24px] w-[32px] hover:scale-[1.1] ${scrolled ? "change" : ''}`}/>
    </Link>
  );
};

export default Socials;
