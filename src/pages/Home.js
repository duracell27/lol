import React, { useContext } from "react";
import { FieldContext } from "../context/field/fieldContext";
import { Field } from "../componets/Field";
import { GlobalContext } from "../context/global/globalContext";
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
        <p>Змінити рослину {defPlant ? defPlant.name: null}</p>
        <p>Змінити удобрення {defManuring ? defManuring.name : null}</p>
      </div>
    </div>
  );
}

export default Home;
