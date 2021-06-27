import React, { useReducer } from "react";
import { FieldContext } from "./fieldContext";
import { fieldReducer } from "./fieldReducer";
import { ADD_FIELD, CHANGE_ACTION_ID } from "./types";

export const FieldState = ({ children }) => {
  const initialState = {
    fields: [
      { id: 1, actionId: 0 },
      { id: 2, actionId: 0 },
      { id: 3, actionId: 0 },
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

  return (
    <FieldContext.Provider
      value={{ addField, changeAction, fields: state.fields }}
    >
      {children}
    </FieldContext.Provider>
  );
};
