 import React, { useState } from 'react'
 import Offcanvas from "react-bootstrap/Offcanvas";
 import Button from "react-bootstrap/Button";
import ReviewCanavas from '../ReviewCanavas/ReviewCanavas';
export default function GuestReviews() {
      const [show, setShow] = useState(false);
         const handleClose = () => setShow(false);
         const handleShow = () => setShow(true);

    return (
      <>
        <div className="mt-5">
          <div class="d-flex mb-3">
            <div class="me-auto p-2">
              <h3>Guest reviews</h3>
            </div>
            <div class="p-2">
              <button className="btn btn-primary rounded-0">
                See availability
              </button>
            </div>
          </div>

          <div className="my-3">
            <h5>Review Here</h5>
          </div>
          <div>
            <Button variant="danger" onClick={handleShow} className="me-2">
              Read all reviews
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Read all reviews</Offcanvas.Title>
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
