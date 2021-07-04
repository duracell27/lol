import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FieldContext } from "../context/field/fieldContext";
import { GlobalContext } from "../context/global/globalContext";
import cls from "./field.module.css";

export const Field = ({ fieldInfo }) => {
  const history = useHistory();
  const { changeAction } = useContext(FieldContext);
  const { defPlant, defManuring, addExp } = useContext(GlobalContext);
  const actionNames = {
    0: defPlant ? `Посадити ${defPlant.name}` : `Посадити`,
    1: "Полити",
    2: defManuring ? `Удобрити ${defManuring.name}` : `Удобрити`,
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
            ? `/img/${defPlant.img}`
            : "/img/dirt2_new.jpg"
        }
        alt={"plantImg"}
      ></img>
      <button
        onClick={() => {
          if (actionNames[fieldInfo.actionId] === "Посадити") {
            history.push("/chosePlant");
          } else {
            addExp(defPlant.exp[fieldInfo.actionId]);
            changeAction(fieldInfo.id);
          }
        }}
      >
        {actionNames[fieldInfo.actionId]}
      </button>
    </div>
  );
};
