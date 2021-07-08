import React, { useContext, useReducer } from "react";
import { FieldContext } from "../field/fieldContext";
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
        exp:{
          0: 30,
          1: 10,
          2: 20,
          3: 50,
          4: 10,
        },
        harvestQuantity: 2,
        sellPrice: 20,
        buyPrice: 16
      },
      {
        id: 1,
        name: "Цибуля",
        timeHarvest: 90,
        timeWater: 15,
        timeManuring: 30,
        img: "luk.jpg",
        exp:{
          0: 50,
          1: 30,
          2: 50,
          3: 80,
          4: 30,
        },
        harvestQuantity: 2,
        sellPrice: 30,
        buyPrice: 24
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
  const { addPlantFromDefPlant, addManuringFromDefManuring } = useContext(FieldContext);

  const setDefaultPlant = (id) => {
    const activePlant = state.plants[id];
    addPlantFromDefPlant(activePlant)
    setActivePlant(activePlant);
  };

  const setDefaultManur = (id) => {
    const activeManur = state.manuring[id];
    addManuringFromDefManuring(activeManur)
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
