import React, { useContext } from "react";
import { FieldContext } from "../context/field/fieldContext";
import { Field } from "../componets/Field";
function Home() {
  const { fields, addField } = useContext(FieldContext);

  return (
    <div>
      <h1>Home page</h1>
      {fields.map((field) => (
        <Field fieldInfo={field}/>
      ))}
      <button onClick={addField}>Add Field</button>
    </div>
  );
}

export default Home;
