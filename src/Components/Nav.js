import React from 'react'
import { NavHashLink } from 'react-router-hash-link';
import '../index.css'

const Nav = ({text, to, dropdown}) => {
  return (
    <NavHashLink
      to={to}
      className=""
    >
     {text}
    </NavHashLink>
  );
}

export default Nav