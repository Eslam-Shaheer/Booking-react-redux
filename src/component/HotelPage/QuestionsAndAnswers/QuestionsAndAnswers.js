import React, {useState} from "react";
import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./QuestionsAndAnswers.css";
export default function QuestionsAndAnswers() {
const [maxChar, setmaxChar] = useState(300);
const [show, setShow] = useState(false);
  return (
    <>
      <div className="border mt-5">
        <div class="d-flex mt-3">
          <div class="p-3">
            <svg
              class="mt-2"
              fill="#0071C2"
              height="36"
              width="36"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z"></path>
            </svg>
          </div>
          <div class="p-2 ">
            <p className="fw-bold">Property questions and answers</p>
            <p>
              Looking for more info? Send a question to the property to find out
              more.
            </p>
          </div>
          <div class="ms-auto p-2 ">
            <Button variant="outline-primary" onClick={() => setShow(true)}>
              Ask a Question
            </Button>
          </div>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <h5 className="fw-bold mt-2">
                Didn't find the answer you were looking for? Ask a question
                about the property
              </h5>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Type your question here:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    maxLength="300"
                    placeholder="e.g do you offer room service"
                    onChange={(e) => setmaxChar(e.target.value.length - 300)}
                  />
                  <p>{maxChar} characters left</p>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <span className="fw-bold">Email address</span>
                  </Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Button
                  className="rounded-0 w-100"
                  type="submit"
                  variant="primary"
                >
                  Submit your question
                </Button>
              </Form>
              <div className="p-0">
                <p className="mt-3">
                  Your question will be published on Booking.com after it has
                  been approved and answered.{" "}
                  <a className="text-decoration-none fw-bold" href="#">
                    Click here to read post guidelines.
                  </a>
                </p>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}
