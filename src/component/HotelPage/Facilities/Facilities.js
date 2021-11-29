import React from 'react'
import "./Facilities.css";
export default function Facilities() {
    return (
      <>
        <div className="mt-5">
          <div class="d-flex mb-3">
            <div class="me-auto p-2">
              <h3>Facilities of Grand Hotel Qena</h3>
            </div>
            <div class="p-2">
              <button className="btn btn-primary rounded-0">
                See availability
              </button>
            </div>
          </div>

          <div class="d-flex flex-row  mb-3">
            <div className="col d-flex justify-content-between ">
              <div class="d-flex flex-column mb-3">
                <div class="p-2">
                  <h5 className="fw-bold fs-6">
                    <svg
                      class="me-2"
                      height="21"
                      width="21"
                      viewBox="0 0 24 24"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z"></path>
                    </svg>{" "}
                    Food & Drink
                  </h5>
                </div>
                <ul class="list-group ">
                  <li class="list-group-item">
                    <div>
                      <svg
                        class="me-2"
                        height="14"
                        width="14"
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                      </svg>
                      Restaurant
                    </div>
                  </li>
                </ul>
              </div>

              <div class="d-flex flex-column mb-3 ">
                <div class="p-2 ms-2 ">
                  <h5 className="fw-bold fs-6">
                    <svg
                      class="me-2"
                      height="21"
                      width="21"
                      viewBox="0 0 24 24"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M14.244 14.156a6.75 6.75 0 0 0-6.75-5.906A6.747 6.747 0 0 0 .73 14.397a.75.75 0 0 0 1.494.134 5.25 5.25 0 0 1 5.27-4.781 5.253 5.253 0 0 1 5.262 4.594.75.75 0 1 0 1.488-.188zM10.125 4.125a2.625 2.625 0 1 1-5.25 0V1.5h5.25v2.625zm1.5 0V1.5a1.5 1.5 0 0 0-1.5-1.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v2.625a4.125 4.125 0 0 0 8.25 0zM23.25 22.5H.75l.75.75v-7.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v7.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-7.5a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 15.75v7.5c0 .414.336.75.75.75h22.5zM4.376 5.017a9.42 9.42 0 0 1 3.12-.517 9.428 9.428 0 0 1 3.133.519.75.75 0 0 0 .49-1.418A10.917 10.917 0 0 0 7.498 3a10.91 10.91 0 0 0-3.611.6.75.75 0 0 0 .49 1.417zM15.75 14.27a3.001 3.001 0 0 1 6 .16.75.75 0 1 0 1.5.04 4.501 4.501 0 1 0-9-.24.75.75 0 1 0 1.5.04zm3.75-3.77V8.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zM17.25 9h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z"></path>
                    </svg>
                    Services
                  </h5>
                </div>
                <ul class="list-group ">
                  <li class="list-group-item">
                    <div>
                      <svg
                        class="me-2"
                        height="14"
                        width="14"
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                      </svg>
                      24-hour front desk
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div>
                      <svg
                        class="me-2"
                        height="14"
                        width="14"
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                      </svg>
                      Room service
                    </div>
                  </li>
                </ul>
              </div>

              <div class="d-flex flex-column mb-3">
                <div class="p-2">
                  <h5 className="fw-bold fs-6">
                    <svg
                      class="me-2"
                      height="21"
                      width="21"
                      viewBox="0 0 24 24"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z"></path>
                    </svg>
                    Internet
                  </h5>
                </div>
                <ul class="list-group ">
                  <li class="list-group-item">
                    <div>
                      <svg
                        class="me-2"
                        height="14"
                        width="14"
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                      </svg>
                      No internet access available.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="d-flex flex-row  mb-3">
            <div className="col d-flex justify-content-between ">
              <div class="d-flex flex-column mb-3 ">
                <div class="p-2 ms-2 ">
                  <h5 className="fw-bold fs-6">
                    <svg
                      class="me-2"
                      height="21"
                      width="21"
                      viewBox="0 0 24 24"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z"></path>
                    </svg>
                    Languages spoken
                  </h5>
                </div>
                <ul class="list-group ">
                  <li class="list-group-item">
                    <div>
                      <svg
                        class="me-2"
                        height="14"
                        width="14"
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                      </svg>
                      Arabic
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div>
                      <svg
                        class="me-2"
                        height="14"
                        width="14"
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                      </svg>
                      English
                    </div>
                  </li>
                </ul>
              </div>
              <div class="d-flex flex-column">
                <div class="p-2">
                  <h5 className="fw-bold fs-6">
                    <svg
                      class="me-2"
                      height="21"
                      width="21"
                      viewBox="0 0 24 24"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
                    </svg>
                    General
                  </h5>
                </div>
                <ul class="list-group ">
                  <li class="list-group-item">
                    <div>
                      <svg
                        class="me-2"
                        height="14"
                        width="14"
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                      </svg>
                      Air conditioning
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div>
                      <svg
                        class="me-2"
                        height="14"
                        width="14"
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                      </svg>
                      Family rooms
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div>
                      <svg
                        class="me-2"
                        height="14"
                        width="14"
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                      </svg>
                      Non-smoking rooms
                    </div>
                  </li>
                </ul>
              </div>

              <div class="d-flex flex-column me-5">
                <div class="p-2">
                  <h5 className="fw-bold fs-6">
                    <svg
                      class="me-2"
                      height="21"
                      width="21"
                      viewBox="0 0 24 24"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path>
                    </svg>
                    Parkings
                  </h5>
                </div>
                <ul class="list-group ">
                  <li class="list-group-item">
                    <div>
                      <svg
                        class="me-2"
                        height="14"
                        width="14"
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                      </svg>
                      No parking available.
                    </div>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>

          <p className="text-primary text-end">
            Missing some information?{" "}
            <a className="text-decoration-none fw-bold" href="#">
              Yes
            </a>{" "}
            /{" "}
            <a className="text-decoration-none fw-bold" href="#">
              No
            </a>
          </p>
        </div>
      </>
    );
}
