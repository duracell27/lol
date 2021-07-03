import React, { useContext, useReducer } from "react";
import { GlobalContext } from "../global/globalContext";
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
        id: 1,
        name: "Компост",
        timeReduce: 30,
        img: "kompost.png",
      },
    ],
  };
  const [state, dispatch] = useReducer(plantReducer, initialState);
  const { setActivePlant, setActiveManur } = useContext(GlobalContext);

  const setDefaultPlant = (id) => {
    const activePlant = state.plants[id];
    setActivePlant(activePlant);
  };

  const setDefaultManur = (id) => {
    const activeManur = state.manuring[id];
    setActiveManur(activeManur);
  };

  return (
    <PlantContext.Provider
      value={{
        setDefaultPlant,
        setDefaultManur,
        plants: state.plants,
        manuring: state.manuring,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
};
