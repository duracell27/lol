import React, { useReducer } from "react";
import { FieldContext } from "./fieldContext";
import { fieldReducer } from "./fieldReducer";
import { ADD_FIELD, CHANGE_ACTION_ID, SET_PLANT_ID } from "../types";

export const FieldState = ({ children }) => {
  const initialState = {
    fields: [
      { id: 1, actionId: 0, plantId: null, manuringId: null },
      { id: 2, actionId: 0, plantId: null, manuringId: null },
      { id: 3, actionId: 0, plantId: null, manuringId: null },
    ],
  };

  const [state, dispatch] = useReducer(fieldReducer, initialState);

  const addField = () => {
    const newField = {
      id: state.fields.length + 1,
      actionId: 0,
    };

    dispatch({ type: ADD_FIELD, newField });
  };

  const changeAction = (id) => {
    const changedFields = state.fields.map((field) => {
      console.log(field.actionId)
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

  const setPlantId = (plantDefId, fieldId) => {
    console.log('here def', plantDefId)
    console.log('here field', fieldId)
    dispatch({type: SET_PLANT_ID, plantDefId, fieldId})
  }

  return (
    <FieldContext.Provider
      value={{ addField, changeAction, setPlantId, fields: state.fields }}
    >
      {children}
    </FieldContext.Provider>
  );
};
