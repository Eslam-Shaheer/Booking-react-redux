import React, { useEffect, useState } from "react";
import Availability from "../../component/HotelPage/All-Availability/Availability";
import BodyCom from "../../component/HotelPage/BodyCom/BodyCom";
import NavBanner from "../../component/HotelPage/Book-Banner/NavBanner";
import Covid from "../../component/HotelPage/Covid/Covid";
import HotelImg from "../../component/HotelPage/HotelImg/HotelImg";
import NavHotel from "../../component/HotelPage/NavHotel/NavHotel";
import Search from "../../component/HotelPage/Search/Search";
import MostPopularFacilities from "../../component/HotelPage/Mostpopularfacilities/MostPopularFacilities";
import { axiosInstance } from "../../Redux/network";
import WhyChose from "../../component/HotelPage/WhyChose/WhyChose";
import GuestReviews from "../../component/HotelPage/GuestReviews/GuestReviews";
import QuestionsAndAnswers from "../../component/HotelPage/QuestionsAndAnswers/QuestionsAndAnswers";
import Facilities from "../../component/HotelPage/Facilities/Facilities";
import HouseRules from "../../component/HotelPage/HouseRules/HouseRules";
import Faqs from "../../component/HotelPage/Faqs/Faqs";

export default function HotelPage() {
  const [hotel, setHotel] = useState();

  useEffect(() => {
    axiosInstance.get("hotel/619cd61add2d1495a56e550b").then((result) => {
      setHotel(result.data.data);
    });
  }, []);

  return (
    <>
      <Covid />
      <div className="container d-md-flex my-3">
        <div className="col-md-3 me-3">
          <Search />
        </div>
        <div className="col-md-9">
          {hotel && <NavHotel hotel={hotel} />}
          {hotel && <HotelImg hotel={hotel} />}
          {/* <NavBanner /> */}
          {hotel && <BodyCom hotel={hotel} />}
          <MostPopularFacilities />
          <Availability />
          <WhyChose />
          <GuestReviews />
          <QuestionsAndAnswers />
          <Facilities />
          <HouseRules />
          <Faqs />
        </div>
      </div>
    </>
  );
}
