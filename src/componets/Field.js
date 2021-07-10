import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { FieldContext } from "../context/field/fieldContext";
import { GlobalContext } from "../context/global/globalContext";
import cls from "./field.module.css";
import { WerehouseContext } from "../context/werehouse/werehouseContext";

export const Field = ({ fieldInfo }) => {
  const history = useHistory();
  const { changeAction } = useContext(FieldContext);
  const { defPlant, addExp, removeGold } = useContext(GlobalContext);
  const { addToWerehouse } = useContext(WerehouseContext);

  const actionNames = {
    0: fieldInfo.plant ? `Посадити ${fieldInfo.plant.name}` : `Посадити`,
    1: "Полити",
    2: fieldInfo.manuring ? `Удобрити ${fieldInfo.manuring.name}` : `Удобрити`,
    3: "Зібрати",
    4: "Вскопати",
  };

  const [disable, setDisable] = useState(false);
  const [disableTime, setDisableTime] = useState(null);
  const [timePlant, settimePlant] = useState(null);
  const timer = (plusTime) => {
    setDisable(true);
    setDisableTime(plusTime);
    const newTime = Math.round(new Date() / 1000) + plusTime;
    const inter = setInterval(() => {
      setDisableTime(newTime - Math.round(new Date() / 1000));
      if (newTime === Math.round(new Date() / 1000)) {
        clearInterval(inter);
        setDisable(false);
      }
    }, 1000);
  };

  return (
    <div className={cls.field}>
      <div>
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
      </div>
      <div className={cls.rightside}>
        <h2 className={cls.h2}>
          {fieldInfo.actionId === 0
            ? `Грядка пуста`
            : fieldInfo.actionId === 4
            ? "Вскопайте грядку"
            : `${fieldInfo.plant.name}`}
        </h2>

        <button
          disabled={disable}
          className={cls.button}
          onClick={() => {
            if (
              actionNames[fieldInfo.actionId] === "Посадити" ||
              actionNames[fieldInfo.actionId] === "Удобрити"
            ) {
              history.push("/chosePlant");
            } else {
              if (fieldInfo.actionId === 0) {
                removeGold(fieldInfo.plant.buyPrice);
                settimePlant(Math.round(new Date() / 1000));
                const chekForWaterButton =
                  timePlant +
                  fieldInfo.plant.timeWater -
                  Math.round(new Date() / 1000);
                if (chekForWaterButton > 0) {
                  timer(chekForWaterButton);
                }
                timer(fieldInfo.plant.timeWater);
              }
              if (fieldInfo.actionId === 1) {
                const chekForManuringButton =
                  timePlant +
                  fieldInfo.plant.timeManuring -
                  Math.round(new Date() / 1000);
                if (chekForManuringButton > 0) {
                  timer(chekForManuringButton);
                }
              }
              if (fieldInfo.actionId === 2) {
                removeGold(fieldInfo.manuring.buyPrice);
                const chekForHarvestButton =
                  timePlant +
                  fieldInfo.plant.timeHarvest -
                  Math.round(new Date() / 1000 + fieldInfo.manuring.timeReduce);
                if (chekForHarvestButton > 0) {
                  timer(chekForHarvestButton);
                }
              }
              if (fieldInfo.actionId === 3) {
                addToWerehouse(fieldInfo.plant);
              }
              addExp(defPlant.exp[fieldInfo.actionId]);
              changeAction(fieldInfo.id);
            }
          }}
        >
          {actionNames[fieldInfo.actionId]}{" "}
          {disableTime ? `${disableTime} сек.` : null}
        </button>
      </div>
    </div>
  );
};
