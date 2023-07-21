import React from "react";
import { Link } from "react-router-dom";

const Socials = ({ to, location, alt }) => {
  return (
    <Link to={to} target="_blank">
      <img src={location} alt={alt} className="large:w-8 w-[18px]" />
    </Link>
  );
};

export default Socials;
