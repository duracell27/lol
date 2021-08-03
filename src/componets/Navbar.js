import React from 'react';
import {NavLink} from 'react-router-dom'
import cls from './navbar.module.css'

function Navbar() {
  return (
    <div className={cls.navbar}>
      <NavLink to={'/'}>Головна</NavLink>
      <NavLink to={'/werehouse'}>Склад</NavLink>
    </div>
  );
}

export default Navbar;
