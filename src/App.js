import React, { useState } from "react";
import "./App.css";

function City({city, state, latitude, longitude, popEst, totalWages}) {
  return (
  <div className = "card">
      <div className = "card-header"> {city}, {state} </div>
      <div className = "card-body">
        <ul>
          <li>State: {state} </li>
          <li>Location: {latitude}, {longitude}</li>
          <li>Population: {popEst}</li>
          <li>Total Wages: {totalWages}</li>
        </ul>
      </div>

  </div>
  );
}

function ZipSearchField({handleChange, input}) {
  return (
      <div class="mb-3">
          <label for="colFormLabel" class="col-form-label">Zip Code:</label>
          <input className="form-control" type="text" placeholder="Enter here" onChange = {handleChange} value = {input}/>
      </div>
  );
}

function App() {
  const [zipCode, setZipCode] = useState("");
  
  const getZipCode = (event) =>{
      fetch("https://ctp-zip-api.herokuapp.com/")
          .then((res) => res.json())
          .then((body) => {
              setZipCode(body.results[0]);
          })
  };
  return (
    <div className="App">
      <div className="App-header">
        <h1>Zip Code Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        <ZipSearchField />
        <div>
          <City />
          <City />
        </div>
      </div>
    </div>
  );
}

export default App;
