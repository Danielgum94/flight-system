import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Controlpanel from './components/Controlpanel';
import SortFlights from './components/SortFlights';
import AddFlights from './components/AddFlights';
import flightsData from './data';
import DeleteFlights from './components/DeleteFlights';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [planeArr, setPlaneArr] = useState(flightsData); // Initialize as an array

  const addNewFlight = (id, flightCompany, passengers) => {
    let flag = false;
    planeArr.forEach((val) => {
      if (val.id === id) {
        flag = true;
        alert('The flight already exists');
        return false;
      }
    });
    if (flag === false) {
      let newFlight = new Plane(id, flightCompany, passengers);
      setPlaneArr([...planeArr, newFlight]);
    }
  };

  const deleteFlight = (id) => {
    let flag = false;
    const updatedFlights = planeArr.filter((flight) => {
      if (flight.id === id) {
        flag = true;
        return false;
      }
      return true;
    });

    if (!flag) {
      alert('Flight not found');
    } else {
      let totalFlights = updatedFlights.length;
      let totalPassengers = updatedFlights.reduce(
        (total, flight) => total + parseInt(flight.passengers, 10),
        0
      );
  
      setPlaneArr(updatedFlights); // Update the flights array
      alert(`Flight ${id} has been deleted.`);
      alert(`Total Flights: ${totalFlights}, Total Passengers: ${totalPassengers}`);
    }
  };


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="controlpanel" element={<Controlpanel planeArr={planeArr} />} />
          <Route path="controlpanel/sort/" element={<SortFlights planeArr={planeArr} />} />
          <Route path="controlpanel/add/" element={<AddFlights add={addNewFlight} />} />
          <Route path="controlpanel/delete/" element={<DeleteFlights delete={deleteFlight}/>} />
        </Routes>
        <br/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

class Plane {
  constructor(id, flightCompany, passengers) {
    this.id = id;
    this.flightCompany = flightCompany;
    this.passengers = passengers;
  }
}

export default App;
