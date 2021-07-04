import React from "react";
import { GlobalContext } from "./globalContext";
import { globalReducer } from "./globalReducer";
import { useReducer } from "react";
import { ADD_FIELD, SET_DEFAULT_MANUR, SET_DEFAULT_PLANT } from "../types";

export const GlobalState = ({ children }) => {
  const initialState = {
    gold: 1000,
    exp: 0,
    defPlant: null,
    defManuring: null,
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);
 
  const setActivePlant = (activePlant) => {
    dispatch({type: SET_DEFAULT_PLANT, activePlant})
  }

  const setActiveManur = (activeManur) => {
    dispatch({type: SET_DEFAULT_MANUR, activeManur})
  }

  const addExp = (exp)=>{
    dispatch({type: ADD_FIELD, exp})
  }

  return (
    <GlobalContext.Provider
      value={{
        gold: state.gold,
        exp: state.exp,
        defPlant: state.defPlant,
        defManuring: state.defManuring,
        setActivePlant,
        setActiveManur,
        addExp
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
