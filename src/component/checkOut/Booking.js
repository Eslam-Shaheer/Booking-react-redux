import React, { useState } from "react";
import Like from "../Properties/images/like.svg";
import Paypal from "./Paypal";
import { axiosInstance } from "../../Redux/network";

export default function Booking() {
  const [checkout, setCheckout] = useState(false);

  let paying = () => {
    axiosInstance
      .post("checkout/pay/", { name: "testname7amada", price: 34, quantity: 3 })
      .then((truess) => {
        console.log(truess, "qqqqqq");
      });
  };

  return (
    <>
      <div className="py-3 px-2">
        <div
          style={{ backgroundColor: "#FFF0E0" }}
          className="border border-danger d-flex p-3"
        >
          <div className="me-3">
            <svg
              className="bk-icon -iconset-info_sign bui-banner__icon"
              height="24"
              role="presentation"
              width="24"
              viewBox="0 0 128 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M49.4 85l4.2-17.2c.7-2.7.8-3.8 0-3.8a29 29 0 0 0-8.8 3.8l-1.8-3A48 48 0 0 1 66.7 53c3.7 0 4.3 4.3 2.5 11l-5 18c-.7 3.3-.3 4.3.5 4.3a19 19 0 0 0 8.2-4L75 85c-8.6 8.7-18.2 12-21.8 12s-6.4-2.3-3.8-12zM75 36a9.2 9.2 0 0 1-9.2 9c-4.4 0-7-2.7-6.8-7a9 9 0 0 1 9.1-9c4.6 0 6.9 3.2 6.9 7z"></path>
              <path d="M62 16a48 48 0 1 1-48 48 48 48 0 0 1 48-48m0-8a56 56 0 1 0 56 56A56 56 0 0 0 62 8z"></path>
            </svg>
          </div>
          <div>
            <p>
              {" "}
              In response to the coronavirus (COVID-19), additional safety and
              sanitation measures are in effect at this property.
            </p>
            <strong>
              <a href="#" className="text-decoration-none">
                Read more
              </a>
            </strong>
          </div>
        </div>
        <div className="property my-3">
          <div className="card mb-3 p-3">
            <div className="row g-0">
              <div className="col-md-3 img">
                <img
                  src={
                    "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768"
                  }
                  className="img-fluid rounded-start h-100 "
                  alt="..."
                />
                <i className="far fa-heart"></i>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title ">
                    <a href="#" className="text-decoration-none">
                      Grand Hotel
                    </a>
                  </h5>
                  <div className="stars">
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

                    <img src={Like} alt="" />
                  </div>
                  <div>
                    <a href="#" className="card-text ">
                      qena , EL Gomhorya street
                    </a>{" "}
                    <span className="dotspan "></span>{" "}
                    <a href="#" className="card-text">
                      {" "}
                      Show on map{" "}
                    </a>{" "}
                    <span className="dotspan"></span>
                    <p className="card-text ">
                      <small>0.3 km from center</small>
                    </p>
                  </div>
                  <p className="p-desc">
                    Only steps from Austin's State features spacious guestrooms
                    furnished with coffeemakers and knowledgeable on-site...
                  </p>

                  <div className=" border border-secondary px-1  mt-3 d-inline-block">
                    <span
                      data-bui-component="Tooltip"
                      data-tooltip-position="bottom"
                      data-tooltip-text="Public parking is available at a location nearby (reservation is not possible) and charges may apply."
                    >
                      <svg
                        aria-hidden="true"
                        className="me-1 -streamline-parking_sign bp-bui-badge__icon"
                        fill="currentColor"
                        focusable="false"
                        height="14"
                        width="14"
                        viewBox="0 0 24 24"
                        role="presentation"
                      >
                        <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path>
                      </svg>
                      Parking
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="row">
                  <div className="reviews col-lg-8 ">
                    <a className="text-muted " href="#">
                      {" "}
                      reviews 786
                    </a>
                  </div>
                  <div className="rate col-lg-4  d-flex justify-content-center ">
                    <a
                      className="align-self-center text-decoration-none"
                      href="#"
                    >
                      7.6
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 "></div>
                </div>
                <button className="btn btn-primary fw-bold mt-3" type="button">
                  Show Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border p-3 ">
          <h5>Good to know:</h5>
          <div className="d-flex py-2">
            <svg
              className="bk-icon -streamline-checkmark_selected"
              fill="#008009"
              height="25"
              role="presentation"
              width="80"
              viewBox="0 0 110 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
            </svg>
            <p>No payment needed today. You'll pay when you stay.</p>
          </div>
        </div>

        <div className="border py-3 px-2 mt-3 ">
          <div className="bui-card__content">
            <button
              className="btn text-primary "
              type="button"
              data-command="show-auth-lightbox"
              data-command-params="tab=signin;extraClass=user-access-menu-lightbox--user-center;redirect_uri=https%3A%2F%2Faccount.booking.com%2Fauth%2Foauth2%3Fredirect_uri%3Dhttps%253A%252F%252Fsecure.booking.com%252Flogin.html%253Fop%253Doauth_return%26bkng_action%3Dbook%26aid%3D304142%26client_id%3DvO1Kblk7xX9tUn2cpZLS%26state%3DUswDkIF6RuQeg78Dp5UJCfCYWsQ7Jet1Qm4q2VVrArFFdesjkBLkEHBera67A6nT0gftUljqVPP-6ExtJ1RCW2HFyqL0UUJU0f9kwDkyZPjY1D87NAn7HZ9gUI1kmIqOVh3LEVxt20WS91hC8FQAtmtAM4XUFGeRcFwK8nUudycB3NciuTsS4j1uMo4_ZXzlBvA_hfYQuz9Hyisa21mmwlr69Az3ti-DlAVmYj9B_j9RulAaWJgWWEDOuqe856JOU9N2Xyz4rJF62njX4H6a379NGnnDfJIh3JOhLEqMO1M-GVvEIGhwu-6SL7lVE4P9zeAQ0KJ1v6ncp0jHexq92ZCR-e3L6v1hsZR28hAZTRwoyMmvXePjp5Dl5HVCr8R2x6YLzsuAyduLQ5m_YaK2vqpeSc8DkNDpNII_kXNTMvZqkT-sU4RN3NWvdSzysnNOHmWylwznNvCGaGWD_oEh5zwQ8fxvKXU0xjAJPqf4et3I7ChgX9e1DBT80imNm3fNURXsd7Ek_r4jusKQO4q7XDri_ca8HWMa28qY5cG5JT6tRWShH7tkpIYyo9rNprlGOVGx9C3mdy6vxJqw9vh_lh3adsWp_eyRisLYI8GtKA%26dt%3D1638205130%26lang%3Den-us%26response_type%3Dcode%26iframe%3D1"
              data-component="iam/preload-iframe"
            >
              <span
                aria-hidden="true"
                role="presentation"
                className="bui-icon bui-link__icon bui-icon--small"
              >
                <svg
                  aria-hidden="true"
                  className=" me-1"
                  fill="blue"
                  height="16"
                  width="16"
                  viewBox="0 0 24 24"
                  role="presentation"
                  focusable="false"
                >
                  <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
                </svg>
              </span>
              <span className="bui-link__text">Sign in</span>
            </button>{" "}
            to book with your saved details or
            <button className="btn text-primary  " type="button">
              <span className="bui-link__text">register</span>
            </button>{" "}
            to manage your bookings on the go!
          </div>
        </div>

        <div
          className="Details p-3 border my-3"
          style={{ backgroundColor: "#ebf3ff" }}
        >
          <h5>Enter your details</h5>
          <div
            className="d-inline-block p-1 px-2 rounded"
            style={({ color: "#006607" }, { backgroundColor: "#d2edd5" })}
          >
            Almost done! Just fill in the <b style={{ color: "brown" }}>*</b>{" "}
            required info
          </div>

          <div>
            <strong>Are you traveling for work?</strong> <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="traveller"
                id="traveller"
                value="option1"
              />
              <label className="form-check-label" for="traveller">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="traveller"
                id="notTraveller"
                value="option2"
              />
              <label className="form-check-label" for="notTraveller">
                No
              </label>
            </div>
          </div>

          <div className="row g-3 ">
            <div className="col-md-6">
              <label for="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="validationCustom02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                alue="Otto"
                required
              />
            </div>

            <div className="col-md-8">
              <label for="validationCustom03" className="form-label">
                Email Address
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required
              />
            </div>
            <div className="col-md-8">
              <label for="validationCustom03" className="form-label">
                Confirm Email Address
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required
              />
            </div>
          </div>
        </div>

        <div
          className="Details p-3 border my-3"
          style={{ backgroundColor: "#ebf3ff" }}
        >
          <h5>Double Room</h5>
          <div className="d-flex py-2">
            <svg
              className="bk-icon -streamline-checkmark_selected"
              fill="#008009"
              height="25"
              role="presentation"
              width="80"
              viewBox="0 0 110 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
            </svg>
            <p>
              <span className="text-success fw-bold"> FREE cancellation</span>{" "}
              until 11:59 PM on December 6, 2021
            </p>
          </div>

          <div className="d-flex">
            <div className="me-3">
              <svg
                fill="#333333"
                height="12"
                width="12"
                viewBox="0 0 128 128"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M56.08 94C40.76 93.71 34 86.93 34 72a4 4 0 0 0-8 0c0 15-6.85 21.79-22 22a4 4 0 0 0 0 8c15.08 0 21.86 6.8 22 22a4 4 0 0 0 3.92 4H30a4 4 0 0 0 4-3.8c.75-15.14 7.69-22.2 21.83-22.2H56a4 4 0 0 0 .08-8zm-25.84 13.06a22.592 22.592 0 0 0-8.89-9.13A22.62 22.62 0 0 0 30 89.38a22.88 22.88 0 0 0 8.92 8.67 23.504 23.504 0 0 0-8.68 9.01zM124.09 47C94.6 46.34 80.91 32.69 81 4.06V4a4 4 0 0 0-8 0c-.11 28.91-13.8 42.57-43.06 43a4 4 0 0 0 .06 8h.13c29 0 42.58 13.68 42.87 43a4 4 0 0 0 3.93 4H77a4 4 0 0 0 4-3.8C82.45 69.14 96.41 55 123.68 55h.32a4 4 0 0 0 .09-8zM86.83 60.1a43.579 43.579 0 0 0-9.43 15q-6.3-17.72-23.53-24.3a40.922 40.922 0 0 0 13.68-8.61A40.07 40.07 0 0 0 76.92 28q6.49 16.58 23.7 23a40.069 40.069 0 0 0-13.79 9.1z"></path>
              </svg>
            </div>
            <div>
              <span className="text-muted">
                Exceptionally clean rooms – 8.2
              </span>
            </div>
          </div>
          <div className="d-flex m-2">
            <div
              className="border border-success px-1"
              data-facility-id="38"
              data-facility-type="1"
            >
              <span className=" bui-badge bui-badge--constructive bp-bui-badge">
                <svg
                  className="bk-icon -streamline-shower"
                  fill="#008009"
                  height="16"
                  width="16"
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M15.375 10.875a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm.375 12.375V18.7l-.667.745C20.748 18.98 24 15.925 24 10.5a2.25 2.25 0 0 0-4.5 0c0 1.945-.609 3.154-1.64 3.848a3.973 3.973 0 0 1-2.132.652H9a3.75 3.75 0 1 0 0 7.5h3a2.25 2.25 0 0 0 0-4.5H9a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 0 1.5H9a2.25 2.25 0 0 1 0-4.5h6.74a5.426 5.426 0 0 0 2.957-.908C20.154 14.613 21 12.932 21 10.5a.75.75 0 0 1 1.5 0c0 4.6-2.628 7.069-6.083 7.455a.75.75 0 0 0-.667.745v4.55a.75.75 0 0 0 1.5 0zm-7.5-1.5v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 1.5h1.5l-.53-.22 1.402 1.402a.75.75 0 0 0 1.06-1.06L2.78.22A.75.75 0 0 0 2.25 0H.75a.75.75 0 1 0 0 1.5zm2.983 3.754a.01.01 0 0 1 .016.002c-.542-1.072-.1-2.426 1.008-2.988a2.25 2.25 0 0 1 2.037 0c-.041-.022-.043-.029-.04-.034l.002-.002-3.013 3.012zm1.07 1.05l3.002-3A1.489 1.489 0 0 0 7.51.951 3.766 3.766 0 0 0 4.079.929 3.75 3.75 0 0 0 2.43 5.971a1.49 1.49 0 0 0 2.382.323zm3.408-.968l1.116.62a.75.75 0 1 0 .728-1.312l-1.116-.62a.75.75 0 1 0-.728 1.312zm1.964-2.233l1.615.44a.75.75 0 1 0 .394-1.448l-1.615-.44a.75.75 0 1 0-.394 1.448zm4.217 1.15l1.615.44a.75.75 0 0 0 .396-1.447l-1.615-.44a.75.75 0 0 0-.396 1.447zM5.697 7.388l.577 1.038a.75.75 0 1 0 1.312-.728L7.009 6.66a.75.75 0 1 0-1.312.728zM3.284 8.94l.44 1.615a.75.75 0 1 0 1.448-.394l-.44-1.615a.75.75 0 1 0-1.448.394zm1.15 4.219l.246.896a.75.75 0 1 0 1.446-.396l-.245-.896a.75.75 0 1 0-1.446.396z"></path>
                </svg>
                Private Bathroom
              </span>
            </div>
            <div
              className="border border-success px-1 ms-1"
              data-name-en=""
              data-facility-id="75"
              data-facility-type="1"
            >
              <span className=" bui-badge bui-badge--constructive bp-bui-badge">
                <svg
                  className="bk-icon -streamline-tv_flat_screen"
                  fill="#008009"
                  height="16"
                  width="16"
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M22.5 10.375v6.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-13a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v6.5zm1.5 0v-6.5a1.75 1.75 0 0 0-1.75-1.75H1.75A1.75 1.75 0 0 0 0 3.875v13c0 .966.784 1.75 1.75 1.75h20.5a1.75 1.75 0 0 0 1.75-1.75v-6.5zm-16.5 12h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm3.75-4.5v3.75a.75.75 0 0 0 1.5 0v-3.75a.75.75 0 0 0-1.5 0z"></path>
                </svg>
                Flat-screen TV
              </span>
            </div>
          </div>

          <div>
            <strong>
              Guests:{" "}
              <svg
                Name=""
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
              </svg>
              <svg
                Name=""
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
              </svg>
              +
              <svg
                Name=""
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
              </svg>{" "}
            </strong>
            <span className="ms-2 fs-6">
              {" "}
              <svg
                aria-label="No smoking"
                className="bk-icon -streamline-no_smoking"
                fill="#333333"
                height="20"
                role="img"
                width="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19.5 9h2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 0 0 1.5h7.5A2.25 2.25 0 0 0 24 12.75v-3a2.25 2.25 0 0 0-2.25-2.25H19.5a.75.75 0 0 0 0 1.5zM5.25 13.5h-1.5l.75.75v-6L3.75 9h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5zM15 12v2.25a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-1.5 0zM0 8.25v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm1.28 15.53l22.5-22.5A.75.75 0 0 0 22.72.22L.22 22.72a.75.75 0 1 0 1.06 1.06zM4.5.75A2.25 2.25 0 0 1 2.25 3 2.25 2.25 0 0 0 0 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75A3.75 3.75 0 0 0 6 .75a.75.75 0 0 0-1.5 0z"></path>
              </svg>{" "}
              No smoking
            </span>
          </div>

          <div className="row g-3 mt-1 ">
            <div className="col-md-6 ">
              <label for="validationCustom01" className="form-label 6 fw-bold">
                Full Guest Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="validationCustom02" className="form-label 6 fw-bold">
                Guest email{" "}
                <span className="text-muted fw-normal"> (optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                alue="Otto"
                required
              />
              <small style={({ fontSize: "12px" }, { color: "gray" })}>
                Emails are only used for sending reservation info. No commercial
                messages – <span className="fw-bold">guaranteed.</span>
              </small>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-sm-9">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="breackfast"
                name="breackfast"
              />
              <label className="form-check-label" htmlFor="breackfast">
                Breakfast
              </label>
              <p className="text-muted ms-4">
                <small className="">
                  Enjoy a convenient Breakfast at the property for EGP 178 per
                  person, per night.
                </small>
              </p>
            </div>
            <div className="col-sm-3 ">
              <div className="ms-4">EGP 712</div>
              <p className="text-muted">2 guests, 2 nights</p>
            </div>
          </div>
        </div>
        <div
          className="Details p-3 border my-3"
          style={{ backgroundColor: "#ebf3ff" }}
        >
          <h5>Special requests</h5>
          <p>
            Special requests can't be guaranteed, but the property will do its
            best to meet your needs. You can always make a special request after
            your booking is complete.
          </p>
          <strong>Please write your requests in English or French. </strong>{" "}
          <small className="text-muted">(optional)</small>
          <br />
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">Request</label>
          </div>
        </div>
        <div
          className="arrival p-3 border my-3"
          style={{ backgroundColor: "#ebf3ff" }}
        >
          <h5>Your arrival time</h5>
          <div className="d-flex py-2">
            <svg
              className="bk-icon -streamline-checkmark_selected"
              fill="#008009"
              height="25"
              role="presentation"
              width="60"
              viewBox="0 0 110 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
            </svg>
            <p> Your rooms will be ready for check-in at 2:00 PM</p>
          </div>
          <div className="d-flex py-2">
            <svg
              className="bk-icon -streamline-front_desk"
              fill="#008009"
              height="25"
              width="60"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M14.244 14.156a6.75 6.75 0 0 0-6.75-5.906A6.747 6.747 0 0 0 .73 14.397a.75.75 0 0 0 1.494.134 5.25 5.25 0 0 1 5.27-4.781 5.253 5.253 0 0 1 5.262 4.594.75.75 0 1 0 1.488-.188zM10.125 4.125a2.625 2.625 0 1 1-5.25 0V1.5h5.25v2.625zm1.5 0V1.5a1.5 1.5 0 0 0-1.5-1.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v2.625a4.125 4.125 0 0 0 8.25 0zM23.25 22.5H.75l.75.75v-7.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v7.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-7.5a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 15.75v7.5c0 .414.336.75.75.75h22.5zM4.376 5.017a9.42 9.42 0 0 1 3.12-.517 9.428 9.428 0 0 1 3.133.519.75.75 0 0 0 .49-1.418A10.917 10.917 0 0 0 7.498 3a10.91 10.91 0 0 0-3.611.6.75.75 0 0 0 .49 1.417zM15.75 14.27a3.001 3.001 0 0 1 6 .16.75.75 0 1 0 1.5.04 4.501 4.501 0 1 0-9-.24.75.75 0 1 0 1.5.04zm3.75-3.77V8.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zM17.25 9h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z"></path>
            </svg>
            <p>24-hour front desk – help whenever you need it!</p>
          </div>

          <div className="bui-form__group bp-form-group bp-form-group__checkin_eta_hour  ">
            <label for="checkin_eta_hour">
              Add your estimated arrival time
              <span className="text-muted ms-2">(optional)</span>
            </label>
            <div>
              <select
                name="checkin_eta_hour"
                className="form-select"
                id="checkin_eta_hour"
              >
                <option value="" disabled="" selected="">
                  Please select
                </option>
                <option value="-1">I don't know</option>
                <option value="0">12:00&nbsp;AM – 1:00&nbsp;AM </option>
                <option value="1">1:00&nbsp;AM – 2:00&nbsp;AM </option>
                <option value="2">2:00&nbsp;AM – 3:00&nbsp;AM </option>
                <option value="3">3:00&nbsp;AM – 4:00&nbsp;AM </option>
                <option value="4">4:00&nbsp;AM – 5:00&nbsp;AM </option>
                <option value="5">5:00&nbsp;AM – 6:00&nbsp;AM </option>
                <option value="6">6:00&nbsp;AM – 7:00&nbsp;AM </option>
                <option value="7">7:00&nbsp;AM – 8:00&nbsp;AM </option>
                <option value="8">8:00&nbsp;AM – 9:00&nbsp;AM </option>
                <option value="9">9:00&nbsp;AM – 10:00&nbsp;AM </option>
                <option value="10">10:00&nbsp;AM – 11:00&nbsp;AM </option>
                <option value="11">11:00&nbsp;AM – 12:00&nbsp;PM </option>
                <option value="12">12:00&nbsp;PM – 1:00&nbsp;PM </option>
                <option value="13">1:00&nbsp;PM – 2:00&nbsp;PM </option>
                <option value="14">2:00&nbsp;PM – 3:00&nbsp;PM </option>
                <option value="15">3:00&nbsp;PM – 4:00&nbsp;PM </option>
                <option value="16">4:00&nbsp;PM – 5:00&nbsp;PM </option>
                <option value="17">5:00&nbsp;PM – 6:00&nbsp;PM </option>
                <option value="18">6:00&nbsp;PM – 7:00&nbsp;PM </option>
                <option value="19">7:00&nbsp;PM – 8:00&nbsp;PM </option>
                <option value="20">8:00&nbsp;PM – 9:00&nbsp;PM </option>
                <option value="21">9:00&nbsp;PM – 10:00&nbsp;PM </option>
                <option value="22">10:00&nbsp;PM – 11:00&nbsp;PM </option>
                <option value="23">11:00&nbsp;PM – 12:00&nbsp;AM </option>
                <option value="24">
                  12:00&nbsp;AM – 1:00&nbsp;AM (the next day)
                </option>
                <option value="25">
                  1:00&nbsp;AM – 2:00&nbsp;AM (the next day)
                </option>
              </select>
            </div>
            <div
              id="form-field__helper--checkin_eta_hour"
              className="bui-form__helper js-form-field__helper--checkin_eta_hour"
            >
              Time is for Paris time zone
            </div>
          </div>
        </div>
        <div className="my-5">
          {checkout ? (
            <Paypal />
          ) : (
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setCheckout(true);
              }}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </>
  );
}
