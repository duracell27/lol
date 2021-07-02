import React from 'react';
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink><br/>
      <NavLink to={'/shop'}>Shop</NavLink><br/>
      <NavLink to={'/chosePlant'}>ChosePlant</NavLink>
    </div>
  );
}

export default Navbar;
