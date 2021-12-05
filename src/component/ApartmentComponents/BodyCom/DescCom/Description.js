import React from 'react'

export default function Description(props) {
  return (
    <div className="my-4">
      <p>{props.description}</p>

      <p className="text-primary text-center">
        Missing some information?{" "}
        <a className="text-decoration-none fw-bold" href="#">
          Yes
        </a>
        /
        <a className="text-decoration-none fw-bold" href="#">
          No
        </a>
      </p>
    </div>
  );
}
