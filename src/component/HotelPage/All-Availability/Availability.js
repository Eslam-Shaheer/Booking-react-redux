import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./Availability.css";
import { axiosInstance } from "../../../Redux/network";
import { useParams } from "react-router-dom";
export default function Availability(props) {
  const [available, setAvailable] = useState();
  const [availableRooms, setAvailableRooms] = useState();
  const [isSelect, setIsSelect] = useState(false);

  const { id } = useParams();
  const handleDateChange = (e) => {
    setAvailable({ ...available, [e.target.name]: e.target.value });
    console.log(available);
  };
  const checkAvailability = () => {
    axiosInstance.post("filter/rooms/hotel/" + id, available).then((result) => {
      setAvailableRooms(result.data.data);
      setIsSelect(true);
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
        <table id="customers">
          <tr>
            <th>Room type</th>
            <th>Sleeps</th>
            <th>Today's price</th>
            <th>Your choices </th>
            <th>Select rooms</th>
            <th className="text-center">Reserve</th>
          </tr>
          {!isSelect && <tr>Choose</tr>}
          {isSelect &&
            availableRooms.map((room) => {
              return (
                <tr>
                  <td>{room.type}</td>
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
                  <td>{room.price}</td>
                  <td>
                    <ul>
                      <li>Coffee</li>
                      <li>Tea</li>
                      <li>Milk</li>
                    </ul>
                  </td>
                  <td>
                    <Form.Select size="sm">
                      <option>0</option>
                      {[...Array(room.availableRooms)].map((item, index) => {
                        return <option>{index + 1}</option>;
                      })}
                    </Form.Select>
                  </td>

                  <td className="text-center">
                    <buttun className="btn btn-primary   rounded-0">
                      Reserve
                    </buttun>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </>
  );
}
