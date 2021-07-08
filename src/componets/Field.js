import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FieldContext } from "../context/field/fieldContext";
import { GlobalContext } from "../context/global/globalContext";
import cls from "./field.module.css";
import { WerehouseContext } from "../context/werehouse/werehouseContext";

export const Field = ({ fieldInfo }) => {
  const history = useHistory();
  const { changeAction } = useContext(FieldContext);
  const { defPlant, defManuring, addExp } = useContext(GlobalContext);
  const {addToWerehouse} = useContext(WerehouseContext)
  const werehouse = useContext(WerehouseContext);
  console.log(werehouse);
  const actionNames = {
    0: fieldInfo.plant ? `Посадити ${fieldInfo.plant.name}` : `Посадити`,
    1: "Полити",
    2: fieldInfo.manuring ? `Удобрити ${fieldInfo.manuring.name}` : `Удобрити`,
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
            ? `/img/${fieldInfo.plant.img}`
            : "/img/dirt2_new.jpg"
        }
        alt={"plantImg"}
      ></img>
      <button
        onClick={() => {
          if (actionNames[fieldInfo.actionId] === "Посадити") {
            history.push("/chosePlant");
          } else {
            if (fieldInfo.actionId === 3) {
              console.log("зібрано", fieldInfo.plant.name);
              addToWerehouse(fieldInfo.plant)
            }
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
