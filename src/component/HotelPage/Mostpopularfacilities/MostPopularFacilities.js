import React from "react";
import "./MostPopularFacilities.css";
export default function MostPopularFacilities() {
  return (
    <>
      <div>
        <h3>Non-smoking rooms</h3>
      </div>
      <div className="d-flex flex-wrap">
        <div className="d-flex align-items-center me-3">
          <div className="me-2">
            <svg
              class="bk-icon -iconset-nosmoking hp__important_facility_icon"
              height="25"
              width="25"
              viewBox="0 0 128 128"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              fill="green"
            >
              <path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 0 1-36.6-79l31 31H28v8h38.3L95 100.6A47.8 47.8 0 0 1 64 112zm36.6-17l-23-23H84v-8H69.7L33 27.4A48 48 0 0 1 100.6 95zM92 64h8v8h-8zm0-10c0-7.7-5.9-14-13.2-14H78a2 2 0 0 1-2-2 10 10 0 0 0-10-10h-8a2 2 0 0 1 0-4h8a14 14 0 0 1 13.8 12c9 .6 16.2 8.4 16.2 18a2 2 0 0 1-4 0zm-8 0a2 2 0 0 1-4 0 2 2 0 0 0-2-2h-3a15 15 0 0 1-15-15 2 2 0 0 1 4 0 11 11 0 0 0 11 11h3a6 6 0 0 1 6 6z"></path>
            </svg>
          </div>
          <div>
            <p className="mt-3">Non-smoking rooms</p>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="me-2">
            <span class="badge bg-success">
              <b>P</b>
            </span>
          </div>
          <div>
            <p className="mt-3">Free parking</p>
          </div>
        </div>

        <div className="d-flex align-items-center ms-3">
          <div className="me-2">
            <svg
              class="bk-icon -iconset-disabled hp__important_facility_icon"
              height="25"
              width="25"
              viewBox="0 0 128 128"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              fill="green"
            >
              <path d="M83 93.5a24 24 0 1 1-43.1-20.8L36 58a36 36 0 1 0 53 48.7z"></path>
              <circle cx="56" cy="20" r="12"></circle>
              <path d="M107 111.6a4 4 0 0 1-4.8-2.2L90.5 83.2 61 84a8 8 0 0 1-8.2-7q-3.3-15.4-7.7-30.7c-1.3-4.3 1.6-8.5 6.6-9.2l9-1.4c5.1-.8 9.9 2.1 10.4 6.5l1 8.6L93 52a4 4 0 0 1 0 8l-19.7 1.1.6 7.2 19.1.5c4 .2 5.9 2.2 6.6 4.2l10.2 33.6a4 4 0 0 1-2.8 5z"></path>
            </svg>
          </div>
          <div>
            <p className="mt-3">Facilities for disabled guests</p>
          </div>
        </div>

        <div className="d-flex align-items-center ms-3">
          <div className="me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="green"
              class="bi bi-wifi"
              viewBox="0 0 16 16"
            >
              <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
              <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
            </svg>
          </div>
          <div>
            <p className="mt-3">Free Wifi</p>
          </div>
        </div>

        <div className="d-flex align-items-center ms-3">
          <div className="me-2">
            <svg
              class="bk-icon -iconset-family hp__important_facility_icon"
              height="25"
              width="25"
              viewBox="0 0 128 128"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              fill="green"
            >
              <path d="M18 18a10 10 0 1 1 10 10 10 10 0 0 1-10-10zm26 16s-9.8-2-16-2-16 2-16 2c-4 1-4.3 3.4-4 6l3.4 30.5a4.3 4.3 0 0 0 1.3 2.6l1.8 1.8a4.3 4.3 0 0 1 1.3 2.7l3.6 38.4a4.4 4.4 0 0 0 4.5 4h8.2a4.4 4.4 0 0 0 4.5-4L40 77.6a4.3 4.3 0 0 1 1.3-2.7l1.9-1.8a4.3 4.3 0 0 0 1.2-2.6L48 40c.3-2.6.1-5-3.9-6zm20 23a8 8 0 1 0-8-8 8 8 0 0 0 8 8zm11.2 2.4A73.6 73.6 0 0 0 64 58a73.6 73.6 0 0 0-11.2 1.4c-2.8.7-3 2.3-2.7 4.1l2.3 21a3 3 0 0 0 1 1.9l1.2 1.2a3 3 0 0 1 1 2l2.4 27.7a3.1 3.1 0 0 0 3.1 2.7H67a3.1 3.1 0 0 0 3.1-2.8l2.5-27.7a3 3 0 0 1 1-1.9l1.2-1.2a3 3 0 0 0 .9-1.8l2.4-21c.2-1.9 0-3.5-2.8-4.2zM100 28a10 10 0 1 0-10-10 10 10 0 0 0 10 10zm16 6s-9.8-2-16-2-16 2-16 2c-4 1-4.3 3.4-4 6l3.4 30.5a4.3 4.3 0 0 0 1.3 2.6l1.8 1.8a4.3 4.3 0 0 1 1.3 2.7l3.6 38.4a4.4 4.4 0 0 0 4.5 4h8.2a4.4 4.4 0 0 0 4.4-4l3.6-38.4a4.3 4.3 0 0 1 1.3-2.7l1.8-1.8a4.3 4.3 0 0 0 1.3-2.6L120 40c.3-2.6.1-5-3.9-6z"></path>
            </svg>
          </div>
          <div>
            <p className="mt-3">Family rooms</p>
          </div>
        </div>

        <div className="d-flex align-items-center ms-3">
          <div className="me-2">
            <svg
              class="bk-icon -iconset-bar hp__important_facility_icon"
              height="25"
              width="25"
              viewBox="0 0 128 128"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              fill="green"
            >
              <rect x="60" y="74" width="8" height="44"></rect>
              <rect
                x="60"
                y="94"
                width="8"
                height="40"
                rx="4"
                ry="4"
                transform="rotate(-90 64 114)"
              ></rect>
              <path d="M100 34H28a4 4 0 0 0-3.2 6.4l36 48a4 4 0 0 0 6.4 0l36-48A4 4 0 0 0 100 34zM78.7 61.7H49.3l-16-21.2h61.4z"></path>
              <rect
                x="75.5"
                y="-1.4"
                width="6"
                height="81.9"
                rx="3"
                ry="3"
                transform="rotate(36.31 78.487 39.584)"
              ></rect>
              <circle cx="90.6" cy="21.9" r="8"></circle>
            </svg>
          </div>
          <div>
            <p className="mt-3">Bar</p>
          </div>
        </div>

        <div className="d-flex align-items-center ms-3">
          <div className="me-2">
            <svg
              class="bk-icon -iconset-coffee hp__important_facility_icon"
              height="25"
              width="25"
              fill="green"
              viewBox="0 0 128 128"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M104 116a4 4 0 0 1-4 4H28a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4zM40 96V50a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v6.4a20 20 0 0 1 0 39.2v.4a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8zm48-31.3v22.6a12 12 0 0 0 0-22.6zM49 88a4 4 0 0 0 8 0V64a4 4 0 0 0-8 0zm-1-52a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v16a4 4 0 0 0 4 4zm16 4a4 4 0 0 0 4-4V12a4 4 0 0 0-8 0v24a4 4 0 0 0 4 4zm16-4a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v16a4 4 0 0 0 4 4z"></path>
            </svg>
          </div>
          <div>
            <p className="mt-3"> Superb breakfast</p>
          </div>
        </div>
      </div>

      <div
        class="alert alert-success border border-success rounded-0"
        role="alert"
      >
        <div className="d-flex align-items-center ms-3 p-2">
          <div className="me-2">
            <svg
              fill="#008009"
              height="24"
              role="presentation"
              width="24"
              viewBox="0 0 128 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M108 24H20A12 12 0 0 0 8 36v56a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12V36a12 12 0 0 0-12-12zm-88 8h88a4 4 0 0 1 4 4v4H16v-4a4 4 0 0 1 4-4zm88 64H20a4 4 0 0 1-4-4V56h96v36a4 4 0 0 1-4 4zM24 72h48v8H24z"></path>
            </svg>
          </div>
          <div>
            <span className="text-dark">
              <b>No credit card needed to book.</b> We'll send you an email
              confirming your reservation
            </span>
          </div>
        </div>
      </div>

      <div
        class="alert alert-success border border-success rounded-0"
        role="alert"
      >
        <div className="d-flex align-items-center ms-3 ">
          <div className="Svg">
            <svg
              fill="#008009"
              height="30"
              width="30"
              viewBox="0 0 128 128"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M104 48H44V36a20 20 0 0 1 36.7-11 4 4 0 1 0 6.6-4.5A28 28 0 0 0 36 36v12H24a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8zM64 96a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"></path>
            </svg>
          </div>
          <div>
            <p className="text-dark ms-3">
              Lock in a great price for your upcoming stay
            </p>
            <p className="text-dark ms-3">
              Prices may go up, so secure your reservation today
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
