import React from 'react'

export default function HouseRules(props) {
    return (
      <>
        <div className="mt-5" id="houseRules">
          <div className="d-flex mb-3">
            <div className="me-auto p-2">
              <h3>House rules</h3>
              <p>
                Dreams Land Hotel New Qena takes special requests - add in the
                next step!
              </p>
            </div>
            <div className="p-2">
              <button className="btn btn-primary rounded-0">
                See availability
              </button>
            </div>
          </div>

          <div className="bg-div">
            <div className="container p-3">
              <div className="d-flex flex-row mb-3">
                <div className="mt-1">
                  <svg
                    className="mt-2"
                    height="25"
                    width="25"
                    viewBox="0 0 128 128"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-80-27.3h12v12h-12zm38-16h-12v-12h12zm0 28h-12v-12h12zm26 0h-12v-12h12zm0-28h-12v-12h12zm-48-16h-20v20h20zm-6 14h-8v-8h8z"></path>
                  </svg>
                </div>
                <div className="p-2">
                  <div>
                    <span className="fw-bold fs-5">Check in :</span>
                  </div>
                </div>
                <div className="p-2">
                  <h5 className="mt-1">{props.apartment.checkIn}</h5>
                </div>
              </div>

              <div className="d-flex flex-row mb-3">
                <div className="mt-1">
                  <svg
                    className="mt-2"
                    height="25"
                    width="25"
                    viewBox="0 0 128 128"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-68-43.3h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm4 12h-20v20h20zm-6 14h-8v-8h8z"></path>
                  </svg>
                </div>
                <div className="p-2">
                  <div>
                    <span className="fw-bold fs-5">Check out :</span>
                  </div>
                </div>
                <div className="p-2">
                  <h5 className="mt-1">
                    <h5 className="mt-1">{props.apartment.checkOut}</h5>
                  </h5>
                </div>
              </div>

              <div className="d-flex flex-row mb-3">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-info-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                </div>
                <div className="p-2">
                  <div>
                    <span className="fw-bold">Cancellation/ prepayment :</span>
                  </div>
                </div>
                <div className="p-2">
                  <h5 className="mt-1">
                    <p className="fs-6 text-danger">
                      {" "}
                      You can cancel your reservation and get your money back in{" "}
                      {props.apartment.cancellation} days
                    </p>
                  </h5>
                </div>
              </div>

              <div className="d-flex flex-row mb-3">
                <div className="mt-2">
                  <svg
                   
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </div>
                <div class="p-2">
                  <div className="mt-1">
                    <span className="fw-bold mt-1">No age restriction :</span>
                  </div>
                </div>
                <div className="p-2">
                  <p className="mt-1">
                    There is no age requirement for check-in
                  </p>
                </div>
              </div>

              <div className="d-flex flex-row mb-3">
                <div className="mt-2">
                  <svg
                    
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </div>
                <div className="p-2">
                  <div>
                    <span className="fw-bold">Pets :</span>
                  </div>
                </div>
                <div className="p-2">
                  <p  >
                    {props.apartment.pets ? (
                      <span>Pets are allowed </span>
                    ) : (
                      <span className="text-muted">Pets are not allowed</span>
                    )}
                  </p>
                </div>
              </div>

              <div class="d-flex flex-row">
                <div className="mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-credit-card-2-front-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                  </svg>
                </div>
                <div class="p-2">
                  <div>
                    <span className="fw-bold">
                      Payments by Booking.com :
                    </span>
                  </div>
                </div>
                <div class="p-2">
                  <p>
                    Booking.com takes your payment on behalf of the property for
                    this stay, but make sure you have cash for any extras once
                    you get there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
