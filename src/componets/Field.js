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
    0: fieldInfo.plant ? (
      <div>
        <img className={cls.icon} src={"/img/seat.png"} alt={"icon"} />
        Посадити {fieldInfo.plant.name}
      </div>
    ) : (
      <div>
        <img className={cls.icon} src={"/img/seat.png"} alt={"icon"} />
        Посадити
      </div>
    ),
    1: (
      <div>
        <img className={cls.icon} src={"/img/water.png"} alt={"icon"} />
        Полити
      </div>
    ),
    2: fieldInfo.manuring ? (
      <div>
        <img className={cls.icon} src={"/img/soil.png"} alt={"icon"} />
        Удобрити {fieldInfo.manuring.name}
      </div>
    ) : (
      <div>
        <img className={cls.icon} src={"/img/soil.png"} alt={"icon"} />
        Удобрити
      </div>
    ),
    3: (
      <div>
        <img className={cls.icon} src={"/img/harvest.png"} alt={"icon"} />
        Зібрати
      </div>
    ),
    4: (
      <div>
        <img className={cls.icon} src={"/img/dig.png"} alt={"icon"} />
        Вскопати
      </div>
    ),
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
              fieldInfo.plant === null ||
              (fieldInfo.manuring === null && fieldInfo.actionId === 2)
            ) {
              history.push("/chosePlant");
            } else {
              if (fieldInfo.actionId === 0) {
                if (removeGold(fieldInfo.plant.buyPrice)) {
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
                if (removeGold(fieldInfo.manuring.buyPrice)) {
                  const chekForHarvestButton =
                    timePlant +
                    fieldInfo.plant.timeHarvest -
                    Math.round(
                      new Date() / 1000 + fieldInfo.manuring.timeReduce
                    );
                  if (chekForHarvestButton > 0) {
                    timer(chekForHarvestButton);
                  }
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
          {disableTime ? (
            <div className={cls.displayFlex}>
              {actionNames[fieldInfo.actionId]}&nbsp;{disableTime} сек.
            </div>
          ) : (
            actionNames[fieldInfo.actionId]
          )}
        </button>
      </div>
    </div>
  );
};
