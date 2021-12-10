import React, { useEffect, useState } from "react";
import { Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { axiosInstance } from "../../Redux/network";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Tooltip } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [toggel, setToggel] = useState(0);
  const [loggedInUser, setloggedInUser] = useState();
  const [allFalseNotifications, setAllFalseNotifications] = useState(0);
  const [showNotifications, setShowNotifications] = useState();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    axiosInstance.get("user/loggedin").then((result) => {
      setShowNotifications(
        result.data.data.notifications.reverse().slice(0, 20)
      );
      setloggedInUser(result.data.data);
      if (result.data.success) {
        let falseNotifications = 0;
        for (let noti of result.data.data.notifications) {
          setCurrentDate(new Date(noti.createdAt).toLocaleString());

          if (noti.isRead == false) {
            falseNotifications++;
          }
        }
        setAllFalseNotifications(falseNotifications);
      }
    });
  }, []);

  const readNotifications = () => {
    // // axiosInstance.get("user/read/notifications").then((res) => {
    // //   console.log(res);
    // });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary_color">
        <div className="container mt-2">
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
            <div className="d-flex align-items-center  ms-auto">
              <Button onClick={handleOpen}>
                {toggel === 0 && (
                  <Tooltip title="Choose your language" arrow>
                    <div>
                      <a className="nav-link" href="#">
                        <img
                          className="lang-img rounded-circle"
                          src="https://cf.bstatic.com/static/img/flags/new/48-squared/gb/daba79fdd4066d133e8bf59070fd6819b951c403.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </Tooltip>
                )}

                {toggel === 1 && (
                  <Tooltip title="Chose your language" arrow>
                    <div>
                      <a className="nav-link" href="#">
                        <img
                          className="lang-img rounded-circle "
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </Tooltip>
                )}
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    component="h2"
                    className="text-center fw-bold"
                  >
                    Select your language
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className="d-flex justify-content-center">
                      <div
                        onClick={() => {
                          setToggel(0);
                          handleClose();
                        }}
                      >
                        <a className="nav-link" href="#">
                          <img
                            className="lang-img rounded-circle"
                            src="https://cf.bstatic.com/static/img/flags/new/48-squared/gb/daba79fdd4066d133e8bf59070fd6819b951c403.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div
                        onClick={() => {
                          setToggel(1);
                          handleClose();
                        }}
                      >
                        <a className="nav-link" href="#">
                          <img
                            className="lang-img rounded-circle "
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </Typography>
                </Box>
              </Modal>
              <div className="nav-item mx-lg-2">
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
              </div>

              <div className="nav-item mx-lg-2">
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div onClick={readNotifications}>
                      <button
                        {...bindTrigger(popupState)}
                        type="button"
                        className="btn btnBackground position-relative"
                      >
                        <svg
                          className="me-1"
                          height="27"
                          width="27"
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

                        {allFalseNotifications ? (
                          <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger my-2">
                            {allFalseNotifications}
                          </span>
                        ) : (
                          ""
                        )}
                      </button>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Typography
                          className="bg-light"
                          sx={{
                            p: 2,

                            width: "600px",
                            height: "50%",
                          }}
                        >
                          {showNotifications &&
                            showNotifications.map((elment) => {
                              return (
                                <Stack sx={{ width: "100%" }} spacing={2}>
                                  {elment.isRead ? (
                                    <a
                                      className="text-decoration-none"
                                      href={elment.link}
                                    >
                                      <Alert
                                        className="text-dark AlERT"
                                        variant="outlined"
                                        severity="success"
                                        sx={{
                                          marginBottom: "10px",
                                          bgcolor: "#fff",
                                          boxShadow:
                                            "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                        }}
                                      >
                                        {elment.body} <br />{" "}
                                        <span className="text-muted">
                                          {currentDate}
                                        </span>
                                      </Alert>
                                    </a>
                                  ) : (
                                    <a
                                      className="text-decoration-none"
                                      href={elment.link}
                                    >
                                      {" "}
                                      <Alert
                                        className="AlERT text-dark"
                                        severity="info"
                                        sx={{
                                          boxShadow:
                                            "rgba(6, 24, 44, 0.4) 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 2px 2px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                                          marginBottom: "10px",
                                          bgcolor: "#f0f8ff",
                                        }}
                                        variant="outlined"
                                      >
                                        {elment.body}
                                        <br />{" "}
                                        <span className="text-muted">
                                          {currentDate}
                                        </span>
                                      </Alert>
                                    </a>
                                  )}
                                </Stack>
                              );
                            })}
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>

              <div className="nav-item mx-lg-2 d-flex align-items-center">
                <a className="text-decoration-none " href="">
                  <div className="d-flex align-items-center ">
                    <div className="mx-lg-2">
                      <img
                        className="nav-personal-img rounded-circle "
                        src={loggedInUser && loggedInUser.personalImage}
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column align-items-start justify-content-center">
                      <p
                        className="person-name"
                        onClick={() => navigate("/dashboard")}
                      >
                        {loggedInUser && loggedInUser.username}
                      </p>
                      <p className="font-secoundry_color membership">
                        {loggedInUser && loggedInUser.country}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar navbar-expand-lg bg-primary_color text-white">
        <div className="container secondNav">
          <Nav className="secondNav">
            <Nav.Link className="text-white NavStyle">
              <NavLink
                id="comeHere"
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
