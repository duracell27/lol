import React, { useContext } from "react";
import { WerehouseContext } from "../context/werehouse/werehouseContext";
import {WerehouseField} from './../componets/WerehouseField'
import cls from './werehouse.module.css'
function Werehouse() {
  const {werehouse} = useContext(WerehouseContext);
  
  return (
    <div>
      <h1 className={cls.h1}>Склад</h1>
      {werehouse.length > 0 ? werehouse.map(item=>(<WerehouseField key={item.name} WerehouseFieldInfo={item}/>)) : <h2 className={cls.h2}>Склад пустий...</h2>}    
    </div>
  );
}

export default Werehouse;
