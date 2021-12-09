import React from "react";

export default function BookingDetails(props) {
  return (
    <>
      <div className="border p-3 my-3">
        <h6 className="fw-bold">Your Booking Details</h6>
        <div className="row my-3">
          <div className="col-6">
            <span>Check-in</span>
            <div className="border-end">
              <h6>{props.info.startAt}</h6>
              <span className="text-muted">From {props.property.checkIn}</span>
            </div>
          </div>
          <div className="col-6">
            <span>Check-out</span>
            <div>
              <h6>{props.info.endAt}</h6>
              <span className="text-muted">
                Until {props.property.checkOut}
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <span>Total length of stay:</span> <br />
          <strong>{props.info.days} Days</strong>
        </div>
        <hr />

        <div className="">
          <strong>You selected:</strong>
          <br />
          <span>
            {props.info.roomsNum} {props.info.roomType}
          </span>
        </div>
      </div>
      <div className="border p-3 my-3">
        <h6 className="fw-bold">Your price summary</h6>

        <div>
          <div className="d-flex justify-content-between mb-1">
            <span>{props.info.roomsNum} rooms</span>
            <span>{props.info.days} Days</span>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <strong>Price</strong>
          <strong>{props.info.totalPrice}$</strong>
        </div>
      </div>
    </>
  );
}
