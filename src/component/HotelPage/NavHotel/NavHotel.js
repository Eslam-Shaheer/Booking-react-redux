import React, { useState } from "react";
import "./NavHotel.css";
// import Scrollspy from "react-scrollspy";

export default function NavHotel() {

  return (
    <>
      {/* <Scrollspy
        className="scrollspy"
        items={["infoPrices", "Facilities", "houseRules"]}
        currentClassName="isCurrent"
      > */}
      <nav className="NAV">
        <ul>
          <li>
            <a className=" text-my-color fw-bold " href="#infoPrices">
              Info & prices
            </a>
          </li>
          <li>
            <a className=" text-my-color fw-bold " href="#Facilities">
              Facilities
            </a>
          </li>
          <li>
            <a className=" text-my-color fw-bold " href="#houseRules">
              Hous rules
            </a>
          </li>
          <li>
            <a
              className=" text-my-color fw-bold "
              href="#"
           
            >
              Guest review
            </a>
          </li>
        </ul>
      </nav>
      {/* </Scrollspy> */}
    </>
  );
}
