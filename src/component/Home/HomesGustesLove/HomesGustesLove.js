import React, { useEffect, useState } from 'react'
import "./HomesGustesLove.css";
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from "../../../Redux/actions/hotel";

export default function HomesGustesLove() {
   const Hotels = useSelector((state) => state.hotel.getHotels);
  const [getAllHotels, setAllHotesl] = useState();
  
   let dispatch = useDispatch();
   useEffect(() => {
    console.log(Hotels)
 },[Hotels]);       

 useEffect(() => {
   dispatch(getHotels());
  }, []);


    return (
      <>
        <div className="container py-4 ">
          <h3 className="mb-4">Homes guests love</h3>
          <div className="d-flex justify-content-between flex-column  flex-md-row">
            {Hotels &&
              Hotels.data.map((item) => {
                return <span>{item.hotelName} </span>;
              })}

            <div className="card border-0 mb-3 mx-auto CustomImg">
              <img
                className="h-75 rounded-2"
                src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=  "
                className="card-img-top"
                alt="..."
              />
              <div className="card-body my-2 p-0  ">
                <p className="card-title text-muted mb-0">3 Epoques</p>
                <p className="card-text text-muted mb-2">Prague</p>

                <p className="card-text mb-1">
                  Started from <span>2227 EGP</span>
                </p>
                <div className="d-flex justify-content-between align-items-center w-75">
                  <span className=" bg-primary_color badge-rating ">9.0</span>{" "}
                  <span className="fw-normal">Wonderful</span>{" "}
                  <span className="text-muted number-reviews">
                    1678 reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
