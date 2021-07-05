import React, { useContext } from "react";
import { WerehouseContext } from "../context/werehouse/werehouseContext";
function Werehouse() {
  const werehouse = useContext(WerehouseContext);
  console.log(werehouse);
  return (
    <div>
      <h1>Склад</h1>
      {/* {werehouse} */}
    </div>
  );
}

export default Werehouse;
