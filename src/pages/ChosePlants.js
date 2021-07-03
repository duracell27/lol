import React, {useContext} from 'react';
import { PlantContext } from '../context/plant/plantContext';
import { PlantField } from '../componets/PlantField';

function ChosePlant() {
    const {plants, manuring} = useContext(PlantContext)
    
  return (
    <div>
      <h1>Plants / Manuring Page</h1>
      <h3>Plants</h3>
        {plants.map(plant=>(<PlantField key={plant.id} plantFieldInfo={plant}/>))}
        <h3>Manuring</h3>
        {manuring.map(manur=>(<PlantField key={manur.id} manurFieldInfo={manur}/>))}
    </div>
  );
}

export default ChosePlant;
