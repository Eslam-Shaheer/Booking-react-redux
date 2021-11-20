import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "./Redux/actions/hotel";
import { getHotelById } from "./Redux/actions/hotel";

function App() {
  const upload = (event) => {
    const formData = new FormData();

    console.log(event);
  };

  return (
    <div className="App">
      <input
        type="file"
        name="multiple_images"
        onChange={(event) => upload(event)}
      />
    </div>
  );
}
export default App;
