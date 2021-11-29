import React from 'react'
import { Form } from 'react-bootstrap';
import "./Availability.css";
export default function Availability() {
    return (
      <>
        <div className="d-flex" id="scrollspyHeading1">
          <div>
            <h3>Availability</h3>
          </div>
        </div>

        <div className="border d-flex">
          <div className="d-flex flex-column p-3">
            <div className="border-end">
              <h6>Check-in date</h6>
              <h6 className="text-primary">Sun 28 Nov 2021</h6>
              <span className="me-2">From 00:00 until 00:00</span>
            </div>
          </div>

          <div className="d-flex flex-column p-3">
            <div>
              <h6>Check-out date</h6>
              <h6 className="text-primary">Sun 28 Nov 2021</h6>
              <span>1-night stay</span>
            </div>
          </div>

          <div className="d-flex ms-auto p-3">
            <div>
              <h6>Guest</h6>
              <h6 className="text-primary">2 aduts</h6>
            </div>
          </div>

          <div className="d-flex ms-auto p-3">
            <div>
              <button className="btn btn-primary rounded-0">
                Change Search
              </button>
            </div>
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
              <th>Check Availability</th>
            </tr>

            <tr>
              <td>Paris spécialités</td>
              <td>
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
              </td>
              <td>Price Here</td>
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
                  <option>0</option>
                  <option>0</option>
                </Form.Select>
              </td>

              <td>
                <input type="date" class="form-control" />
              </td>
            </tr>
          </table>
        </div>
      </>
    );
}

 
 
 
 


 