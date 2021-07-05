import React, { useContext } from "react";
import { PlantContext } from "../context/plant/plantContext";
import { PlantField } from "../componets/PlantField";

function ChosePlant() {
  const { plants, manuring } = useContext(PlantContext);

  return (
    <div>
      <h1>Виберіть стандартну рослину і добриво</h1>
      <div>
        <div>
          <h3>Рослини</h3>
          {plants.map((plant) => (
            <PlantField key={plant.id} plantFieldInfo={plant} />
          ))}
        </div>
        <div>
          <h3>Добрива</h3>
          {manuring.map((manur) => (
            <PlantField key={manur.id} manurFieldInfo={manur} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChosePlant;
