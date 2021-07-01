import React from "react";
import { PlantContext } from "./plantContext";

export const PlantsState = ({ children }) => {
  const initialState = {
    plants: [
      {
        id: 0,
        name: "Горох",
        timeHarvest: 60,
        timeWater: 10,
        timeManuring: 25,
      },
      {
        id: 1,
        name: "Цибуля",
        timeHarvest: 90,
        timeWater: 15,
        timeManuring: 30,
      },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return <PlantContext.Provider value={{}}>{children}</PlantContext.Provider>;
};
