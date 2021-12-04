import { axiosInstance } from "../../../Redux/network";
import React, { useEffect, useState } from "react";
import { Card, Form, Modal } from "react-bootstrap";
import "./ReviewCanavas.css";
import { Rating } from "react-simple-star-rating";

export default function ReviewCanavas() {
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(false);
  const [reviews, setReviews] = useState();
  const [review, setReview] = useState();
  const [msg, setMsg] =useState(false)


  useEffect(() => {
    axiosInstance
      .get("campground/review/61a9686369692796a2797f50")
      .then((result) => {
        setReview(result.data.data);
      });
  }, []);

  const handleRating = (rate = 0) => {
    setRating(rate);
    
  };

  const leaveReview = () => {
    reviews.starRating = rating / 20;
    axiosInstance
      .post("campground/review/" + "61a9686369692796a2797f50", reviews)
      .then((result) => {
        if (!result.data.success) {
          alert(result.data.msg);
        }else{
          setMsg(true)
          setTimeout(() => {
              setMsg(false);
          }, 3000);
        }

        axiosInstance
          .get("campground/review/61a9686369692796a2797f50")
          .then((result) => {
            setReview(result.data.data);
          });
      });
  };

  const onChange = (e) => {
    setReviews({ ...reviews, [e.target.name]: e.target.value });
    console.log(reviews);
  };
  return (
    <div className="containr-fluid">
      <div className="my-3">
        {" "}
        <button
          className="btn btn-outline-primary  rounded-0"
          onClick={() => setShow(true)}
        >
          Leave Review
        </button>{" "}
        {msg && (
          <div className="alert alert-success mt-2" role="alert">
            Thank you for your review
          </div>
        )}
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <h5 className="fw-bold mt-2">
            Please leave a review and say what your opinion about this hotel
          </h5>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Type your review here:</Form.Label>
            <Form.Control
              name="body"
              as="textarea"
              rows={5}
              onChange={onChange}
            />
          </Form.Group>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            name="starRating"
          />

          <button
            onClick={() => {
              setShow(false);
              leaveReview();
            }}
            className="rounded-0 w-100"
            type="submit"
            variant="primary"
          >
            Send your review
          </button>
        </Modal.Body>
      </Modal>
      {review &&
        review.map((x) => {
          return (
            <div className="container">
              <div className="d-flex align-items-center">
                <div>
                  <Card.Img
                    variant="top"
                    src={x.userId.personalImage}
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="ms-2">
                  <h5>{x.userId.username}</h5>
                </div>
                <div className="ms-auto">
                  <span class="badge-rating">{x.starRating}</span>
                </div>
              </div>
              <div className="col-12 mt-3">{x.body}</div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
