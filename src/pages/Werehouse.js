import React, { useContext } from "react";
import { WerehouseContext } from "../context/werehouse/werehouseContext";
import {WerehouseField} from './../componets/WerehouseField'
function Werehouse() {
  const {werehouse} = useContext(WerehouseContext);
  
  return (
    <div>
      <h1>Склад</h1>
      {werehouse.length > 0 ? werehouse.map(item=>(<WerehouseField WerehouseFieldInfo={item}/>)) : <h2>Склад пустий...</h2>}    
    </div>
  );
}

export default Werehouse;
