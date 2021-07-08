import React, { useContext } from "react";
import { FieldContext } from "../context/field/fieldContext";
import { Field } from "../componets/Field";
import { GlobalContext } from "../context/global/globalContext";
import {Link} from 'react-router-dom'
import cls from './home.module.css'
function Home() {
  const { fields, addField } = useContext(FieldContext);
  const { gold, exp, lvl,lvlPercent, defPlant, defManuring } = useContext(GlobalContext);
  return (
    <div>
      <h1>Ваша Ферма</h1>
      <div className={cls.userStats}>
      <p>Золото: {gold}</p>
      <p>Досвід: {exp}</p>
      <p>Рівень: {lvl}({lvlPercent}%)</p>
      </div>
      {fields.map((field) => (
        <Field key={field.id} fieldInfo={field}/>
      ))}
      <button onClick={addField}>Add Field</button>
      <div>
      
        <p>
        <Link to="/chosePlant">Змінити рослину {defPlant ? defPlant.name: null}</Link></p>
          
        <p><Link to="/chosePlant">Змінити удобрення  {defManuring ? defManuring.name : null}</Link></p>
      </div>
    </div>
  );
}

export default Home;
