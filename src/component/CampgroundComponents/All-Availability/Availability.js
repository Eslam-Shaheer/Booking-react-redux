import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import "./Availability.css";
import { axiosInstance } from "../../../Redux/network";
import { useParams } from "react-router-dom";
export default function Availability(props) {
  const [available, setAvailable] = useState();
  const [availableRooms, setAvailableRooms] = useState();
  const [isSelect, setIsSelect] = useState(false);
  const [reservationInfo, setReservationInfo] = useState();

  const { id } = useParams();
  const handleDateChange = (e) => {
    setAvailable({ ...available, [e.target.name]: e.target.value });
  };
  const checkAvailability = () => {
    axiosInstance
      .post("filter/rooms/campground/" + id, available)
      .then((result) => {
        setAvailableRooms(result.data.data);
        setIsSelect(true);
        console.log(result);
      });
  };
  const handleRoomNumbChange = (event, room) => {
    let start = new Date(available.startAt).getTime();
    let end = new Date(available.endAt).getTime();
    let days = (end - start) / 86400000;
    let totalPrice = event.target.value * days * room.price;
    setReservationInfo({
      totalPrice,
      days,
      roomType: room.type,
      roomName: room.roomName,
      roomsNum: event.target.value,
      startAt: available.startAt,
      endAt: available.endAt,
      roomId: room._id,
      room,
    });
  };
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout", {
      state: { reservationInfo, prop: props.campground, type: "campground" },
    });
  };

  return (
    <>
      <div className="d-flex my-2" id="infoPrices">
        <div>
          <h3>Availability</h3>
        </div>
      </div>

      <div className="border d-flex">
        <div className="d-flex flex-column p-3">
          <div>
            <h6>
              <p>Check In</p>
              <input
                name="startAt"
                type="date"
                class="form-control"
                onChange={handleDateChange}
              />
            </h6>
            <h6 className="text-primary">{available && available.startAt}</h6>
          </div>
        </div>

        <div className="d-flex flex-column p-3">
          <div>
            <h6>
              <p>Check Out</p>
              <input
                name="endAt"
                type="date"
                class="form-control"
                onChange={handleDateChange}
              />
            </h6>
            <h6 className="text-primary">{available && available.endAt}</h6>
          </div>
        </div>

        <div className="d-flex ms-auto p-3">
          <button
            className="btn btn-primary rounded-0 my-auto"
            onClick={checkAvailability}
          >
            Check Availability
          </button>
        </div>
      </div>

      {/* الجدول */}

      <div className="mt-4 TableDev">
        {reservationInfo && (
          <div
            style={{ backgroundColor: "#EBF3FF" }}
            className=" reserveCard d-flex w-50 mx-auto rounded-3 justify-content-between align-items-center mb-3  p-3"
          >
            <div className="w-100">
              <div className="d-flex justify-content-between mb-3 ">
                <div>
                  <h6>Room type:</h6>
                  <h6>Room name:</h6>
                  <h6>Number of rooms:</h6>
                  <h6>Days:</h6>
                  <h6>Total price:</h6>
                </div>
                <div>
                  <h6>{reservationInfo.roomType}</h6>
                  <h6>{reservationInfo.roomName}</h6>
                  <h6>{reservationInfo.roomsNum}</h6>
                  <h6>{reservationInfo.days}</h6>
                  <h6 className="text-success">
                    {reservationInfo.totalPrice}$
                  </h6>
                </div>
              </div>

              <button
                className="btn btn-outline-primary w-100"
                onClick={checkout}
              >
                Reserve
              </button>
            </div>
          </div>
        )}
        <table id="customers" className="rooms-table">
          <tr>
            <th>Room type</th>
            <th>Room name</th>
            <th>Sleeps</th>
            <th>Price</th>
            <th>Your choices </th>
            <th>Select rooms</th>
          </tr>

          {isSelect &&
            availableRooms.map((room, index) => {
              return (
                <tr key={index}>
                  <td className="roomType">{room.type}</td>
                  <td>{room.roomName}</td>
                  <td>
                    {[...Array(room.guestsNumber)].map((item) => {
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                      );
                    })}
                  </td>
                  <td>
                    <span className="text-success">{room.price}$ </span>
                    <span className="text-muted">per day</span>
                  </td>
                  <td>
                    <ul>
                      <li>Coffee</li>
                      <li>Tea</li>
                      <li>Milk</li>
                    </ul>
                  </td>
                  <td>
                    <Form.Select
                      size="sm"
                      onChange={(event) => handleRoomNumbChange(event, room)}
                    >
                      <option>0</option>
                      {[...Array(room.availableRooms)].map((item, index) => {
                        return <option value={index + 1}>{index + 1}</option>;
                      })}
                    </Form.Select>
                  </td>
                </tr>
              );
            })}
        </table>
        {!isSelect && (
          <div className="bg-light text-center py-3">
            <h4 className="">Choose booking date</h4>
          </div>
        )}
        {isSelect && availableRooms.length == 0 && (
          <div className="bg-light text-danger text-center py-3">
            <h4 className="">Sorry no available rooms for this date</h4>
          </div>
        )}
      </div>
    </>
  );
}
