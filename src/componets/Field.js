import React, { useContext } from "react";
import { FieldContext } from "../context/fieldContext";
import cls from "./field.module.css";

export const Field = ({ fieldInfo }) => {
  const { changeAction } = useContext(FieldContext);
  const actionNames = {
    0: "Посадити",
    1: "Полити",
    2: "Удобрити",
    3: "Зібрати",
    4: "Вскопати",
  };

  return (
    <div className={cls.field}>
      <h2>Field {fieldInfo.id}</h2>
      <img
        src={
          fieldInfo.actionId == 0
            ? "/img/dirt_new.jpg"
            : fieldInfo.actionId == 1 ||
              fieldInfo.actionId == 2 ||
              fieldInfo.actionId == 3
            ? "/img/goroh_new.jpg"
            : "/img/dirt2_new.jpg"
        }
      ></img>
      <button onClick={() => changeAction(fieldInfo.id)}>
        {actionNames[fieldInfo.actionId]}
      </button>
    </div>
  );
};
