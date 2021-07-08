import { useReducer } from "react";
import { ADD_TO_WEREHOUSE } from "../types";
import { WerehouseContext } from "./werehouseContext";
import { werehouseReducer } from "./werehouseReducer";

export const WerehouseState = ({ children }) => {
  const initialState = {
    werehouse: [],
  };

  const [state, dispatch] = useReducer(werehouseReducer, initialState);

  const addToWerehouse = (plant) => {
    const filtered = state.werehouse.filter((item) => item.name === plant.name);

    if (filtered.length === 0) {
      const newObj1 = {
        name: plant.name,
        quantity: plant.harvestQuantity,
        price: plant.sellPrice,
        img: plant.img
      };
      const newObj = [...state.werehouse, newObj1];

      dispatch({ type: ADD_TO_WEREHOUSE, newObj });
    } else {
      const newObj = state.werehouse.map((item) => {
        if (item.name === plant.name) {
          item.quantity += plant.harvestQuantity;
        }
        return item;
      });

      dispatch({ type: ADD_TO_WEREHOUSE, newObj });
    }
  };

  const removeFromWerehouse = (plantName) => {
      const newObj = state.werehouse.filter((item)=>item.name !== plantName)
      dispatch({ type: ADD_TO_WEREHOUSE, newObj });
  }

  return (
    <WerehouseContext.Provider
      value={{
        werehouse: state.werehouse,
        addToWerehouse,
        removeFromWerehouse
      }}
    >
      {children}
    </WerehouseContext.Provider>
  );
};
