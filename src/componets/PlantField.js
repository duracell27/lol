import React, { useContext } from "react";
import { PlantContext } from "../context/plant/plantContext";
import cls from "./plantField.module.css";
import { useHistory } from "react-router-dom";

const Plant = ({ plant }) => {
  const { setDefaultPlant } = useContext(PlantContext);
  const history = useHistory();
  const plantClickHandler = () => {
    setDefaultPlant(plant.id);
    history.push("/home");
  };
  return (
    <div className={cls.wrapper}>
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
  return (
    <div className={`${cls.wrapper}`}>
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
