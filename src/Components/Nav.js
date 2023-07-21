import React from 'react'
import { NavHashLink } from 'react-router-hash-link';
import '../index.css'

const Nav = ({text, to}) => {
  return (
    <NavHashLink
      to={to}
      activeClassName='active1'
    >
     {text}
    </NavHashLink>
  );
}

export default Nav