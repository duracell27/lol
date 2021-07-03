import React, { useContext } from "react";
import { FieldContext } from "../context/field/fieldContext";
import { Field } from "../componets/Field";
import { GlobalContext } from "../context/global/globalContext";
import {Link} from 'react-router-dom'
function Home() {
  const { fields, addField } = useContext(FieldContext);
  const { gold, exp, defPlant, defManuring } = useContext(GlobalContext);
  return (
    <div>
      <h1>Home page</h1>
      <p>Золото: {gold}</p>
      <p>Досвід: {exp}</p>
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
