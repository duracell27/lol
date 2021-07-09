import React, { useContext } from "react";
import { FieldContext } from "../context/field/fieldContext";
import { Field } from "../componets/Field";
import { GlobalContext } from "../context/global/globalContext";
import {Link} from 'react-router-dom'
import cls from './home.module.css'
function Home() {
  const { fields, addField } = useContext(FieldContext);
  const { gold, exp, expNext, lvl,lvlPercent, defPlant, defManuring } = useContext(GlobalContext);
  return (
    <div>
      <h1 className={cls.h1}>Ваша Ферма</h1>
      <div className={cls.userStats}>
      <p><img  className={cls.icon} src={'img/money.png'} alt={'someImg'}/> Золото: {gold}</p>
      <p><img  className={cls.icon} src={'img/experience.png'} alt={'someImg'}/> Досвід: {exp} / {expNext}</p>
      <p><img  className={cls.icon} src={'img/user.png'} alt={'someImg'}/> Рівень: {lvl} ({lvlPercent}%)</p>
      </div>
      {fields.map((field) => (
        <Field key={field.id} fieldInfo={field}/>
      ))}
      <div className={cls.greenField}>
        <button className={cls.button} onClick={addField}><img  className={cls.icon} src={'img/cart.png'} alt={'someImg'}/>Купити грядку</button>

      </div>
      <div className={cls.greenField}>
      
        <p>
        <Link to="/chosePlant"><img className={cls.icon}  src={'img/seat.png'} alt={'someImg'}/>Змінити рослину {defPlant ? defPlant.name: null}</Link></p>
          
        <p><Link to="/chosePlant"><img className={cls.icon}  src={'img/soil.png'} alt={'someImg'}/>Змінити удобрення  {defManuring ? defManuring.name : null}</Link></p>
      </div>
    </div>
  );
}

export default Home;
