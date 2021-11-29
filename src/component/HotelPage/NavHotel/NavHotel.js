import React from "react";
import ForTest from "../test/test";
import "./NavHotel.css";
export default function NavHotel() {
  return (
    <>
      <nav className="NAV">
        <ul>
          <li>
            <a className=" text-my-color fw-bold " href="#scrollspyHeading1">
              Info & prices
            </a>
          </li>
          <li>
            <a className=" text-my-color fw-bold " href="#scrollspyHeading2">
              Facilities
            </a>
          </li>
          <li>
            <a className=" text-my-color fw-bold " href="#scrollspyHeading3">
              Hous rules
            </a>
          </li>
          <li>
            <a className=" text-my-color fw-bold " href="#scrollspyHeading4">
              Guest review
            </a>
          </li>
        </ul>
      </nav>

  
    </>
  );
}
