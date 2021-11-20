import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "./Redux/actions/hotel";
import { getHotelById } from "./Redux/actions/hotel";
import { getCampGrounds,getCampById, createCampBooking ,getBookingByCampId,deleteCampBooking,
  updateCampBooking,
  createCampReview,
  getReviewsByCampId,
  updateCampReview,
  deleteCampReview,
  creatCampMessage,
  getAllCampMessages,
  deleteCampMessage,

} from "./Redux/actions/campground";


function App() {
  localStorage.setItem('authentication','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGZlYTIyMDdmNzA4MWQ3YzFlMmRhMyIsImVtYWlsIjoiYWhtZWRAei5jb20iLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE2MzczMjc3Nzl9.Vl-EaNNwZDVxr95Gf2X9ApVTij1AIX_9G5qptgL0d2g')
  const [hotels, setHotels] = useState([]);
  const [camps, setCamps] = useState([]);
  const allHotels = useSelector((state) => state.hotel);
  const allCamps = useSelector((state) => state.campGround);
  
  const dispatch = useDispatch();

 
  const booking = {
    startAt: new Date("12-2-2024").toLocaleString(),
    endAt: new Date("12-3-2024").toLocaleString(),
    days:7,
    guestsNum:77
  };
  useEffect(() => {
  
     dispatch(getCampGrounds());
     dispatch(updateCampBooking("61952c198238a36b2873c731","61952c198238a36b2873c732","61980748f7ffc2cb8698dd19",booking));
     dispatch(getReviewsByCampId("61952c198238a36b2873c731"));
     dispatch(deleteCampMessage("61952c198238a36b2873c731","61980c33f7ffc2cb8698e2f1"));
   
     dispatch(getAllCampMessages("61952c198238a36b2873c731"));
   
    // dispatch(deleteCampBooking("61912002225eb08084430cef","619120d1225eb08084430d41","6197aad3948f63868139e73b"));

  //  dispatch(getCamplById("619525daae7ed27ca84f669a"));
  }, []);
  const fun = () => {

    console.log(allCamps.getAllCampMessages,"msg")
  };
  return (
    <div className="App">
      <button onClick={fun}>Add to count</button>
    </div>
  );
}

export default App;
