import React, {useContext} from 'react';
import { FieldContext } from '../context/fieldContext';
import { Field } from '../componets/Field';
function Home() {
    const {fieldsCount} = useContext(FieldContext)
    let fieldsRender = [];
    for(let i; i < fieldsCount; i++){
        fieldsRender.push(<Field/>)
    }
    console.log(fieldsRender)
  return (
    <div>
      <h1>Home page</h1>
      {/* {fieldsRender} */}
    </div>
  );
}

export default Home;
