import "./Property.css";
import StaticHotel from "../../images/img.jpg";
import Like from "../../images/like.svg";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Property(props) {
  let star = [];
  const [Review, setReviewScore] = useState();

  useEffect(() => {
    if (props.prop.avgReviews >= 1 && props.prop.avgReviews <= 3) {
      setReviewScore("bad");
    } else if (props.prop.avgReviews > 3 && props.prop.avgReviews <= 6) {
      setReviewScore("good");
    } else if (props.prop.avgReviews > 6 && props.prop.avgReviews <= 8) {
      setReviewScore("very good");
    } else if (props.prop.avgReviews > 8 && props.prop.avgReviews <= 10) {
      setReviewScore("excellent");
    }
  }, []);
  for (let i = 0; i < props.prop.starRating; i++) {
    star.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-star-fill"
        viewBox="0 0 16 16"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    );
  }
  return (
    <div className="card mb-3 p-3">
      <div className="row g-0">
        <div className="col-md-3 img">
          <img
            src={props.prop.images[0]}
            className="img-fluid rounded-3 w-100 "
            alt="..."
          />
          <i className="far fa-heart"></i>
        </div>
        <div className="col-md-7 ">
          <div className="card-body py-0">
            <NavLink
              to={props.prop._id}
              className="text-decoration-none"
              style={{ color: "#0071c2" }}
            >
              <h5 className="card-title mt-0">
                {props.prop[props.type + "Name"]}
              </h5>
            </NavLink>
            <div className="stars">
              {star}
              <img src={Like} style={{ height: "20px" }} alt="" />
            </div>
            <div style={{ fontSize: "13px" }}>
              <a href="#" className="card-text ">
                {props.prop.city} , {props.prop.streetAddress}
              </a>{" "}
              <span className="dotspan "></span>{" "}
              <a href="#" className="card-text ">
                {" "}
                Show on map{" "}
              </a>{" "}
              <span className="dotspan"></span>
              <p className="card-text "></p>
            </div>
            <p className="p-desc">
              {props.prop.description &&
                props.prop.description.substring(1, 250)}
              ...
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="row">
            <div className="reviews col-lg-8 ">
              <a className="text-muted " href="#">
                <h6 className="p-0 text-success">{Review}</h6>
                reviews {props.prop.totalReviews}
              </a>
            </div>
            <div className="rate col-lg-4  d-flex justify-content-center ">
              <a className="align-self-center text-decoration-none" href="#">
                {props.prop.avgReviews}
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 "></div>
          </div>
          <NavLink to={props.prop._id}>
            <button
              className="btn btn-primary fw-bold mt-3"
              style={{ backgroundColor: "#0071c2" }}
              type="button"
            >
              Show Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
