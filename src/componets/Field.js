import React, { useContext } from "react";
import { FieldContext } from "../context/field/fieldContext";
import { GlobalContext } from "../context/global/globalContext";
import cls from "./field.module.css";

export const Field = ({ fieldInfo }) => {
  const { changeAction } = useContext(FieldContext);
  const { defPlant, defManuring } = useContext(GlobalContext);
  const actionNames = {
    0: defPlant ? `Посадити ${defPlant.name}`: `Посадити`,
    1: "Полити",
    2: defManuring ? `Удобрити ${defManuring.name}`: `Удобрити`,
    3: "Зібрати",
    4: "Вскопати",
  };

  return (
    <div className={cls.field}>
      <h2>Field {fieldInfo.id}</h2>
      <img
        src={
          fieldInfo.actionId === 0
            ? "/img/dirt_new.jpg"
            : fieldInfo.actionId === 1 ||
              fieldInfo.actionId === 2 ||
              fieldInfo.actionId === 3
            ? "/img/goroh.jpg"
            : "/img/dirt2_new.jpg"
        }
       alt={'plantImg'}></img>
      <button onClick={() => changeAction(fieldInfo.id)}>
        {actionNames[fieldInfo.actionId]}
      </button>
    </div>
  );
};
