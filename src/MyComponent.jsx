import React, { useState } from 'react'

function MyComponent() {
  const [cars, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carsMake, setCarMake] = useState("");
  const [carsModel, setCarModel] = useState("");

  function handleAddCar(){

  }

  function handleRemoveCar(index){

  }

  function handleYearChange(event){

  }

  function handleMakeChange(event){

  }

  function handleModelChange(event){

  }


  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>

      </ul>

      <input type="number" value={carYear} onChange={handleYearChange}></input>
    </div>
  )
}

export default MyComponent
