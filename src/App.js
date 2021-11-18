import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "./Redux/actions/hotel";
import { getHotelById } from "./Redux/actions/hotel";

function App() {
  const [hotels, setHotels] = useState([]);
  const allHotels = useSelector((state) => state.hotel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotelById("6191126a225eb080844307c7"));
  }, []);
  const fun = () => {
    console.log(allHotels);
  };
  return (
    <div className="App">
      <button onClick={fun}>Add to count</button>
    </div>
  );
}

export default App;
