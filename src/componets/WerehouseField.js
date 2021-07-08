import React, {useContext} from "react";
import { GlobalContext } from "../context/global/globalContext";
import { WerehouseContext } from "../context/werehouse/werehouseContext";
import cls from './WerehouseField.module.css'

export const WerehouseField = ({ WerehouseFieldInfo }) => {
    const {removeFromWerehouse} = useContext(WerehouseContext)
    const {addGold} = useContext(GlobalContext)
    const clickHandler = () => {
        removeFromWerehouse(WerehouseFieldInfo.name)
        addGold(WerehouseFieldInfo.quantity * WerehouseFieldInfo.price)
    }
  return (
    <div className={cls.wrapper}>
      <div>
        <img src={`/img/${WerehouseFieldInfo.img}`} alt={"plant logo"} />
      </div>
      <div className={cls.rightside}>
        <h3>{`${WerehouseFieldInfo.name}`}</h3>
        <h5>{`Кількість: ${WerehouseFieldInfo.quantity}`}</h5>
        <button onClick={clickHandler}>{`Продати за ${
          WerehouseFieldInfo.quantity * WerehouseFieldInfo.price
        }`}</button>
      </div>
    </div>
  );
};
