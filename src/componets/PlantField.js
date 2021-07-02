import React from "react";
import cls from "./plantField.module.css";

const Plant = ({ plant }) => {
  console.log(plant);
  return (
    <div className={cls.wrapper}>
      <img src={`/img/${plant.img}`} alt={"plantCard"} />
      <div>
        <h3>{plant.name}</h3>
        <p>{`Час до урожаю: ${plant.timeHarvest} сек.`}</p>
        <p>{`Час до поливу: ${plant.timeWater} сек.`}</p>
        <p>{`Час до удобрювання: ${plant.timeManuring} сек.`}</p>
      </div>
      <button>Вибрати</button>
    </div>
  );
};
const Manur = ({ manur }) => {
  return (
    <div className={`${cls.wrapper} ${cls.active}`}>
      <img src={`/img/${manur.img}`} alt={"plantCard"} />
      <div>
        <h3>{manur.name}</h3>
        <p>{`Зменшеня часу до урожаю: ${manur.timeReduce} сек.`}</p>
      </div>
      <button>Вибрати</button>
    </div>
  );
};

export const PlantField = ({ plantFieldInfo, manurFieldInfo }) => {
  if (plantFieldInfo) {
    return <Plant plant={plantFieldInfo} />;
  } else if (manurFieldInfo) {
    return <Manur manur={manurFieldInfo} />;
  }
};
