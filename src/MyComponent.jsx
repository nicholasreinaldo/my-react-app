import React, { useState } from 'react'

function MyComponent() {
  const [cars, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carsMake, setCarMake] = useState("");
  const [carsModel, setCarModel] = useState("");


  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  )
}

export default MyComponent
