import React from 'react';
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <NavLink to={'/'}>Головна</NavLink><br/>
      <NavLink to={'/werehouse'}>Склад</NavLink><br/>
    </div>
  );
}

export default Navbar;
