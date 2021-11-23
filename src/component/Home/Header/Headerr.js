import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="container py-5 search-container">
          <h3>Where to next, Shaheer!</h3>
          <p>Find exclusive Genius rewards in every corner of the world!</p>
          <div className="input-group search-group">
            <input
              type="search"
              className="form-control city-search me-1"
              placeholder="Where are you going?"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <input
              type="date"
              className="form-control date-search me-1"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <input
              type="search"
              className="form-control count-saerch me-1"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-primary">
              Search
            </button>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              I'm looking for an entire home or apartment
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              I'm traveling for work
            </label>
          </div>
        </div>
      </header>
    </>
  );
}
