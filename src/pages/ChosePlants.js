import React, {useContext} from 'react';
import { PlantContext } from '../context/plant/plantContext';
import { PlantField } from '../componets/PlantField';

function ChosePlant() {
    const {plants, manuring} = useContext(PlantContext)
    
  return (
    <div>
      <h1>Plants / Manuring Page</h1>
      <p>Plants</p>
        {plants.map(plant=>(<PlantField plantFieldInfo={plant}/>))}
        <p>Manuring</p>
        {manuring.map(manur=>(<PlantField manurFieldInfo={manur}/>))}
    </div>
  );
}

export default ChosePlant;
