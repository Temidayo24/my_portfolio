import React from "react";
import { Link } from "react-router-dom";

const Socials = ({ to, location, alt }) => {
  return (
    <Link to={to}>
      <img src={location} alt={alt} className="large:w-8 w-16 large:animate-pulse" />
    </Link>
  );
};

export default Socials;
