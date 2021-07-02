import React, {useReducer} from "react";
import { PlantContext } from "./plantContext";
import { plantReducer } from "./plantReducer";

export const PlantState = ({ children }) => {
  const initialState = {
    plants: [
      {
        id: 0,
        name: "Горох",
        timeHarvest: 60,
        timeWater: 10,
        timeManuring: 25,
        img: "goroh.jpg",
      },
      {
        id: 1,
        name: "Цибуля",
        timeHarvest: 90,
        timeWater: 15,
        timeManuring: 30,
        img: "luk.jpg",
      },
    ],
    manuring: [
      {
        id: 0,
        name: "Салітра",
        timeReduce: 20,
        img: "salitra.png",
      },
      {
        id: 0,
        name: "Компост",
        timeReduce: 30,
        img: "kompost.png",
      },
    ],
  };
  const [state, dispatch] = useReducer(plantReducer, initialState);
  return (
    <PlantContext.Provider
      value={{ plants: state.plants, manuring: state.manuring }}
    >
      {children}
    </PlantContext.Provider>
  );
};
