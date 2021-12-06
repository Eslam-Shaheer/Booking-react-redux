import React, { useEffect, useState } from "react";
import "./HomesGustesLove.css";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../../Redux/actions/hotel";
import { axiosInstance } from "../../../Redux/network";

export default function HomesGustesLove(props) {
  const [properties, setProps] = useState();

  useEffect(() => {
    axiosInstance
      .get("filter/property/" + props.prop + "/avgRating/dec")
      .then((result) => {
        if (result.data.success) {
          setProps(result.data.data.splice(0, 4));
        }
      });
  }, []);

  return (
    <>
      <div className="container py-4 ">
        <h3 className="mb-4">{props.prop}s guests love</h3>
        <div className="d-flex justify-content-between flex-column  flex-md-row">
          {properties &&
            properties.map((item) => {
              return (
                <div className="card border-0 mb-3 mx-2 CustomImg">
                  <img
                    className="h-75 rounded-2 loveImg"
                    src={item.images[0]}
                    className="loveImg"
                    alt="..."
                  />
                  <div className="card-body my-2 p-0  ">
                    <p className="card-title text-muted mb-0">
                      {item[props.prop + "Name"]}
                    </p>
                    <p className="card-text text-muted mb-2">{item.country}</p>

                    <div className="d-flex justify-content-between align-items-center w-75">
                      <span className=" bg-primary_color badge-rating ">
                        {item.avgReviews}
                      </span>{" "}
                      <span className="fw-normal">Wonderful</span>{" "}
                      <span className="text-muted number-reviews">
                        {item.totalReviews} reviews
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
