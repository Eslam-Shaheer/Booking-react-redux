import React, { useState } from 'react'
import './reservation.css'
export default function Reservation(props) {
  const [roomWith, setroomWith] = useState(props.hotel.amenities.room);

  return (
    <>
      <div>
        <div className="Reservation">
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
              <p>Top location: Highly rated by recent guests (8.6)</p>
            </div>

            <div className="d-flex flex-column">
              <h6 className="text-secondary">Rooms With</h6>
              <ul>{props.hotel.amenities.food.map((item)=>{
                return <li className="foodLi">{item}</li>
              })}
              </ul>
            </div>
            <div className="d-flex flex-column">
              <h6 className="text-secondary mt-3">Rooms with:</h6>
              <span>Continental</span>
              <span>Continental</span>
              <span>Continental</span>
            </div>

            <div className="d-flex flex-column">
              <h6 className="text-secondary mt-3">Open with:</h6>
              <span>Continental</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="me-2">
                <span class="badge bg-dark">
                  <b>P</b>
                </span>
              </div>
              <div>
                <p className="mt-3">Free private parking available on-site</p>
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
