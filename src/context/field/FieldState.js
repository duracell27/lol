import React, { useReducer, useContext } from "react";
import { FieldContext } from "./fieldContext";
import { fieldReducer } from "./fieldReducer";
import { ADD_FIELD, CHANGE_ACTION_ID, SET_MANUR, SET_PLANT } from "../types";
import { GlobalContext } from "../global/globalContext";

export const FieldState = ({ children }) => {
  const initialState = {
    fields: [
      { id: 1, actionId: 0, plant: null, manuring: null },
      { id: 2, actionId: 0, plant: null, manuring: null },
      { id: 3, actionId: 0, plant: null, manuring: null },
    ],
    fieldCosts: [0, 0, 0, 2000, 5000, 15000],
  };

  const [state, dispatch] = useReducer(fieldReducer, initialState);
  const { defPlant, defManuring } = useContext(GlobalContext);

  const addField = () => {
    const newField = {
      id: state.fields.length + 1,
      actionId: 0,
      plant: defPlant,
      manuring: defManuring,
    };

    dispatch({ type: ADD_FIELD, newField });
  };

  const changeAction = (id) => {
    const changedFields = state.fields.map((field) => {
      if (field.id === id) {
        if (field.actionId < 4) {
          field.actionId++;
        } else {
          field.actionId = 0;
        }
      }
      return field;
    });

    dispatch({ type: CHANGE_ACTION_ID, changedFields });
  };

  const addPlantFromDefPlant = (activePlant) => {
    const newFields = state.fields.map((field) => {
      if (field.actionId === 0) {
        field.plant = activePlant;
      }
      return field;
    });
    dispatch({ type: SET_PLANT, newFields });
  };

  const addManuringFromDefManuring = (activeManur) => {
    const newFields = state.fields.map((field) => {
      if (field.actionId === 0) {
        field.manuring = activeManur;
      }
      return field;
    });
    dispatch({ type: SET_MANUR, newFields });
  };

  return (
    <FieldContext.Provider
      value={{
        addField,
        changeAction,
        addPlantFromDefPlant,
        addManuringFromDefManuring,
        fields: state.fields,
        fieldCosts: state.fieldCosts,
      }}
    >
      {children}
    </FieldContext.Provider>
  );
};
