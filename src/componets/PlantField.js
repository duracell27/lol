import React, { useContext } from "react";
import { PlantContext } from "../context/plant/plantContext";
import cls from "./plantField.module.css";
import { GlobalContext } from "../context/global/globalContext";

const Plant = ({ plant }) => {
  const { setDefaultPlant } = useContext(PlantContext);
  const { defPlant } = useContext(GlobalContext);
  const plantClickHandler = () => {
    setDefaultPlant(plant.id);
  };

  const clases = defPlant
    ? defPlant.id === plant.id
      ? `${cls.wrapper} ${cls.active}`
      : `${cls.wrapper}`
    : `${cls.wrapper}`;

  return (
    <div className={clases}>
      <img src={`/img/${plant.img}`} alt={"plantCard"} />
      <div>
        <h3>{plant.name}</h3>
        <p>{`Час до урожаю: ${plant.timeHarvest} сек.`}</p>
        <p>{`Час до поливу: ${plant.timeWater} сек.`}</p>
        <p>{`Час до удобрювання: ${plant.timeManuring} сек.`}</p>
      </div>
      <button onClick={plantClickHandler}>Вибрати</button>
    </div>
  );
};
const Manur = ({ manur }) => {
  const { setDefaultManur } = useContext(PlantContext);
  const { defManuring } = useContext(GlobalContext);
  const clases = defManuring
    ? defManuring.id === manur.id
      ? `${cls.wrapper} ${cls.active}`
      : `${cls.wrapper}`
    : `${cls.wrapper}`;
  return (
    <div className={clases}>
      <img src={`/img/${manur.img}`} alt={"plantCard"} />
      <div>
        <h3>{manur.name}</h3>
        <p>{`Зменшеня часу до урожаю: ${manur.timeReduce} сек.`}</p>
      </div>
      <button onClick={() => setDefaultManur(manur.id)}>Вибрати</button>
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
