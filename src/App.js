import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "./Redux/actions/hotel";
import { getHotelById } from "./Redux/actions/hotel";
import {
  createBooking,
  createMessage,
  createReplay,
  createReview,
  deleteBooking,
  deleteMessage,
  deleteReview,
  displayAllBookings,
  displayAllMessages,
  displayAllReviews,
  displayApartmentById,
  getApartments,
  updateBooking,
  updateMessage,
  updateReview,
} from "./Redux/actions/apartment";
import { deleteUser, displayUserById, updateUser } from "./Redux/actions/user";

function App() {
  const allapartments = useSelector((state) => state.apartment);

  const [getAllApartments, setApartment] = useState([]);
  const [getApartmentsById, setApartmentById] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setApartment(allapartments.getApartments);
    console.log("Aaaa", allapartments.getApartments);
  }, [allapartments]);

  useEffect(() => {
    setApartmentById(allapartments.displayApartmentById);
  }, [allapartments.displayApartmentById]);

  var date8 = new Date("7-2-2015");
  var date10 = new Date("9-2-2015");

  const bookingObject = {
    startAt: date8,
    endAt: date10,
    days: 22,
    guestsNum: 1000,
  };
  const messageObject = {
    body: "Created Success",
    replay: ["a", "b"],
  };

  const replayObject = {
    replay: "Replay Created",
  };

  const reviewObject = {
    body: "review Created",
    starRating: 4,
  };

  useEffect(() => {
    dispatch(getApartments());
    dispatch(displayApartmentById("61910b31225eb0808442f7bf"));
  }, []);

  const fun = () => {
    console.log(allapartments);
  };

  return (
    <div className="App">
      <button onClick={fun}>Click To Test</button>
    </div>
  );
}

export default App;
