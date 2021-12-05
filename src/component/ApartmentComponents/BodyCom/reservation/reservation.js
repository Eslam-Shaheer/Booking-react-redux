import React, { useState, useEffect } from "react";
import "./reservation.css";
export default function Reservation(props) {
  const [ApartlWith, setApartlWith] = useState([]);

  useEffect(() => {
    let viewElement = [];
    for (let view of props.apartment.facilities.view) {
      switch (view) {
        case "Balcony":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg viewBox="0 0 128 128" height="18" width="18">
                <path d="M119 65.3l-52-56a4 4 0 0 0-6 0l-52 56a4 4 0 0 0 3 6.7h12v48h24V80h32v40h24V72h12a4 4 0 0 0 3-6.7z"></path>
              </svg>
              <span className="ms-1"> Garden view</span>
            </div>
          );
          setApartlWith(viewElement);
          break;
        case "Garden view":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z"></path>
              </svg>
              <span className="ms-1">Balcony</span>
            </div>
          );
          setApartlWith(viewElement);
          break;
        case "Terrace":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z"></path>
              </svg>
              <span className="ms-1">Terrace</span>
            </div>
          );
          setApartlWith(viewElement);
          break;
        case "View":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                height="16"
                width="16"
                viewBox="0 0 128 128"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M127.5 104.38l-45.33-82a4.323 4.323 0 0 0-.33-.5 10.858 10.858 0 0 0-2-2c-4.7-3.567-11.398-2.674-15 2a3.61 3.61 0 0 0-.33.5l-25.44 46-7.87-10.47a4 4 0 0 0-6.75.55l-24 46A4 4 0 0 0 4 110.31h120a4 4 0 0 0 3.5-5.93zM71.32 26.57a2.73 2.73 0 0 1 3.68-.32c.128.093.246.2.35.32L89 51.35l-7.33 6.87-2.54-2.84a7.85 7.85 0 0 0-5.83-2.68 7.88 7.88 0 0 0-5.87 2.68l-2.54 2.83-7.24-6.91zM28.61 67.79l6.21 8.28-14.51 26.24H10.6zm.84 34.52L42.83 78.1c.196-.265.358-.554.48-.86l10.34-18.7 5.86 5.6a7.78 7.78 0 0 0 5.71 2.17 7.89 7.89 0 0 0 5.56-2.67l2.52-2.83 2.53 2.83a7.85 7.85 0 0 0 5.55 2.67h.32a7.75 7.75 0 0 0 5.37-2.17l6-5.58 24.19 43.74z"></path>
              </svg>
              <span className="ms-1">Mountain view</span>
            </div>
          );
          setApartlWith(viewElement);
          break;

        default:
          break;
      }
    }
  }, []);
  let Name;
  if (props.apartment) {
    Name = "apartment";
  }
  return (
    <>
      <div>
        <div className="Reservation mt-3">
          <div className="p-3">
            <h6>Perfect for a 1-night stay!</h6>
            <div className="d-flex">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#0071c2"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                </svg>
              </p>
              <p>
                {" "}
                Located in {props.apartment.country} this {Name} has{" "}
                {props.rate} location score of {props.apartment.avgReviews}
              </p>{" "}
            </div>

            <div className="d-flex flex-column">
              <h6 className="text-secondary mt-2">Apartment with:</h6>
              <div className="ms-0">
                {ApartlWith.map((item) => {
                  return item;
                })}
              </div>
            </div>
          </div>

          <div className="p-3">
            <button className="btn btn-primary w-100 rounded-0">Reserve</button>
          </div>
        </div>
      </div>
    </>
  );
}
