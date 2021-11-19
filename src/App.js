import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getHotelById,
  getHotels,
  createBooking,
  getBookingByHotelId,
  deleteBooking,
  updateBooking,
  createReview,
  getReviewsByHotelId,
  updateReview,
  deleteReview,
  creatMessage,
  getAllMessages,
  updateMessage,
  deleteMessage,
} from "./Redux/actions/hotel";

function App() {
  const message = {
    body: "Anyaaaaaaaaaaaaaaaaaaaa Thing",
  };

  const booking = {
    startAt: new Date("12-2-2024").toLocaleString(),
    endAt: new Date("12-3-2024").toLocaleString(),
  };
  const review = {
    body: "Anyyyyyyyyyyyyyyyyy thing",
  };
  const allHotels = useSelector((state) => state.hotel);

  const [hotel, setHotel] = useState();

  const [hotelByID, setHotelById] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setHotel(allHotels.getHotels);
  }, [allHotels.getHotels]);

  useEffect(() => {
    setHotelById(allHotels.getHotelById);
  }, [allHotels.getHotelById]);

  useEffect(() => {
    // dispatch(getHotelById("6191126a225eb080844307c7"));
    // dispatch(getHotels());
    // dispatch(creatMessage("6191126a225eb080844307c7", message));
    // dispatch(getAllMessages("6191126a225eb080844307c7"));
    // dispatch(
    //   updateMessage(
    //     "6191126a225eb080844307c7",
    //     "6197d07d8b7b8a461864f8cd",
    //     message
    //   )
    // );
    // dispatch(
    //   deleteMessage("6191126a225eb080844307c7", "6197d0bc8b7b8a461864f8df")
    // );
    // dispatch(
    //   createBooking(
    //     "6191126a225eb080844307c7",
    //     "61911359225eb08084430944",
    //     booking
    //   )
    // );
    // dispatch(
    //   updateBooking(
    //     "6191126a225eb080844307c7",
    //     "61911359225eb08084430944",
    //     "61912798d22ea0a3aa243749",
    //     booking
    //   )
    // );
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
