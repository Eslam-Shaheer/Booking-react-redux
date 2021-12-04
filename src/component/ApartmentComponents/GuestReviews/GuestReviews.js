import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./GuestReviews.css";
import ReviewCanavas from "../GuestReviews/ReviewCanavas/ReviewCanavas";
export default function GuestReviews(props) {
  let [apartment, setApartment] = useState(props.apartment);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [reviewScore, setReviewScore] = useState();

  useEffect(() => {
      if (apartment.avgReviews >= 1 && apartment.avgReviews <= 3) {
        setReviewScore("bad");
        props.setReviews("bad");
      } else if (apartment.avgReviews > 3 && apartment.avgReviews <= 6) {
        setReviewScore("good");
        props.setReviews("good");
      } else if (apartment.avgReviews > 6 && apartment.avgReviews <= 8) {
        setReviewScore("very good");
        props.setReviews("very good");
      } else if (apartment.avgReviews > 8 && apartment.avgReviews <= 10) {
        setReviewScore("excellent");
        props.setReviews("excellent");
      }
  }, []);

  return (
    <>
      <div className="mt-5">
        <div className="my-3">
          <h4>Guest reviews</h4>
        </div>

        <div>
          <div className="d-flex">
            <span class="badge-rating me-2"> {apartment.avgReviews} </span>
            {reviewScore && reviewScore}
            <span className="text-secondary fw-bold ms-2">
              {apartment.totalReviews} Reviews{" "}
              <a onClick={handleShow} className="cursor-pointer">
                Read all reviews
              </a>
            </span>
          </div>

          <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div class="d-flex">
                  <div class="p-2 w-100">
                    {" "}
                    <span>{apartment.totalReviews} Reviews </span>
                  </div>
                  <div class="p-2 flex-shrink-1">
                    <span class="badge-rating">{apartment.avgReviews}</span>
                  </div>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ReviewCanavas />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}
