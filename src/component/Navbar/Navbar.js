import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary_color">
        <div className="container">
          <a className="navbar-brand font-white fw-bold fs-4" href="#">
            Booking.com
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-content-center ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  EGP
                </a>
              </li>
              <li className="nav-item mx-lg-2">
                <a className="nav-link" href="#">
                  <img
                    className="lang-img rounded-circle"
                    src="./img/img1.jpeg"
                    alt=""
                  />
                </a>
              </li>
              <li className="nav-item mx-lg-2">
                <a className="nav-link font-white" href="#">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="#FFFF"
                      d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="nav-item mx-lg-2">
                <a className="nav-link font-white" href="#">
                  <svg
                    className="bk-icon -streamline-bell_normal"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="#FFFF"
                      d="M9.28 21.961a2.837 2.837 0 0 0 5.445 0 .75.75 0 1 0-1.44-.422 1.337 1.337 0 0 1-2.565 0 .75.75 0 1 0-1.44.422zM12.75 3V.75a.75.75 0 0 0-1.5 0V3a.75.75 0 0 0 1.5 0zm-.75.75a6.75 6.75 0 0 1 6.75 6.75c0 3.154.29 5.436.785 6.994.323 1.02.684 1.59.995 1.84L21 18H3l.59 1.212c.248-.315.572-.958.88-2 .49-1.66.78-3.872.78-6.712A6.75 6.75 0 0 1 12 3.75zm0-1.5a8.25 8.25 0 0 0-8.25 8.25c0 2.702-.272 4.772-.72 6.288-.254.864-.493 1.336-.62 1.5A.75.75 0 0 0 3 19.5h18c.708 0 1.022-.892.47-1.335.019.016-.008-.015-.07-.113-.14-.223-.29-.553-.435-1.012-.443-1.396-.715-3.529-.715-6.54A8.25 8.25 0 0 0 12 2.25z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="nav-item list-property">
                <div>
                  <a className="nav-link active" aria-current="page" href="#">
                    List your property
                  </a>
                </div>
              </li>
              <li className="nav-item mx-lg-2 d-flex align-items-center">
                <a className="text-decoration-none " href="">
                  <div className="d-flex align-items-center ">
                    <div className="mx-lg-2">
                      <img
                        className="nav-personal-img rounded-circle "
                        src=""
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column align-items-start justify-content-center">
                      <p className="person-name">Eslam Shaheer</p>
                      <p className="font-secoundry_color membership">
                        Guience level 1
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="navbar navbar-expand-lg bg-primary_color text-white ">
        <div className="container ">
          <Nav>
            <Nav.Link className="text-white NavStyle">
              <NavLink
                className="text-white text-decoration-none "
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white NavStyle">
              <NavLink
                className="text-white text-decoration-none"
                activeClassName="active"
                to="/hotels"
              >
                Hotels
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white NavStyle">
              <NavLink
                activeClassName="active"
                className="text-white text-decoration-none"
                to="/apartments"
              >
                Apartments
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white NavStyle">
              <NavLink
                activeClassName="active"
                className="text-white text-decoration-none"
                to="/campgrounds"
              >
                Campgrounds
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white NavStyle">
              <NavLink
                activeClassName="active"
                className="text-white text-decoration-none"
                to="/post"
              >
                Community
              </NavLink>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
}
