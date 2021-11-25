import React from "react";
import { Accordion, Breadcrumb, Container } from "react-bootstrap";
import "./Communities.css";
export default function Communities() {
  return (
    <div className="container">
      <Accordion className="pt-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {" "}
            <svg
              class="bk-icon -streamline-info_sign me-3 "
              fill="<TMPL_V bui_color_complement>"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
            </svg>{" "}
            Coronavirus (COVID-19) support{" "}
          </Accordion.Header>
          <Accordion.Body>
            Get the travel advice you need. Read more about possible travel
            restrictions before you go.
            <a href="#">Read More</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="text-center mt-3 mb-3">
        <img
          src="https://cf.bstatic.com/static/img/communities/cover-photo/united-kingdom/c4930cac4a08547ea13daab3b928d47e04eb728c.jpg"
          className="w-100"
        />
      </div>
    </div>
  );
}
