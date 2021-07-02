import React from "react";
import { GlobalContext } from "./globalContext";
import { globalReducer } from "./globalReducer";
import { useReducer } from "react";

export const GlobalState = ({ children }) => {
  const initialState = {
    gold: 1000,
    exp: 0,
    defPlant: null,
    defManuring: null,
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        gold: state.gold,
        exp: state.exp,
        defPlant: state.defPlant,
        defManuring: state.defManuring,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
