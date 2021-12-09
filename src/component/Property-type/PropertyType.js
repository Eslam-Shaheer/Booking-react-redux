import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../Redux/network";
import "./PropertyType.css";
import { useNavigate } from "react-router-dom";

export default function PropertyType() {
  const navigate = useNavigate();
  const [hotel, setHotel] = useState();
  const [apartmetnt, setApartment] = useState();
  const [campground, setCampground] = useState();
  useEffect(() => {
    axiosInstance.get("hotel").then((result) => {
      if (result.data.success) {
        setHotel(result.data.data);
      }
    });

    axiosInstance.get("campground").then((result) => {
      if (result.data.success) {
        setCampground(result.data.data);
      }
    });

    axiosInstance.get("apartment").then((result) => {
      if (result.data.success) {
        setApartment(result.data.data);
      }
    });
  }, []);

  return (
    <>
      <div className="container py-4 ">
        <h3 className="mb-4">Browse by property type</h3>
        <div className="d-flex justify-content-center  ">
          <div className="card border-0 mb-3 mx-auto CustomWodth">
            <img
              src="https://media.timbu.com/img/h1411628/391/281/b1/siwa-shali-resort-1411628-1.jpg"
              className="card-img-prop"
              alt="..."
            />
            <div className="card-body my-2 p-0 ">
              <p
                className="card-title fw-bold pStyle"
                onClick={() => navigate("/hotels")}
              >
                Hotels
              </p>
              <p className="card-text text-muted">
                {hotel && hotel.length} hotels
              </p>
            </div>
          </div>
          <div className="card border-0 mb-3 mx-auto CustomWodth">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ad52897d274cbe2478e13e5/1602273922921-8AQIZQ53QIIWKNCPW9LM/_DSC7754.jpg?format=1500w"
              className="card-img-prop"
              alt="..."
            />
            <div className="card-body my-2 p-0  ">
              <p
                onClick={() => navigate("/apartments")}
                className="card-title fw-bold pStyle"
              >
                Apartmetnts
              </p>
              <p className="card-text text-muted">
                {apartmetnt && apartmetnt.length} Apartmetnts
              </p>
            </div>
          </div>
          <div className="card border-0 mb-3 mx-auto CustomWodth">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_campsite/6d40bef46964b8841a84cd88793fc8f0fa6663d9.jpg"
              className="card-img-prop"
              alt="..."
            />
            <div className="card-body my-2 p-0 ">
              <p
                className="card-title fw-bold pStyle"
                onClick={() => navigate("/campgrounds")}
              >
                Campground
              </p>
              <p className="card-text text-muted">
                {campground && campground.length} campground
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
