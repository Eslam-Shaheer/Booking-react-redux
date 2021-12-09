import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Header(props) {
  const [allData, setAllData] = useState();
  const [city, setCity] = useState();
  const [countries, setCountries] = useState();

  const [countryData, setCountryData] = useState();

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries").then((res) => {
      setAllData(res.data.data);
      let arrCountry = [];
      for (let item of res.data.data) {
        arrCountry.push(item.country);
      }
      setCountries(arrCountry);
    });
  }, []);

  const Proprety = [
    { label: "apartment" },
    { label: "campground" },
    { label: "hotel" },
  ];

  const onCountryChange = (e) => {
    if (allData) {
      for (let Data of allData) {
        if (Data.country == e.target.innerText) {
          setCity(Data.cities);
        }
      }
    }

    console.log(e.target.innerText);
  };

  const saveData = () => {
    console.log(countryData);
  };

  return (
    <>
      <header>
        <div className="container py-5 search-container">
          <h3>
            Where to next, {props.loggedInUser && props.loggedInUser.username}!
          </h3>
          <p>Find exclusive Genius rewards in every corner of the world!</p>

          <div className="input-group search-group justify-content-between">
            <div className="me-2">
              <Autocomplete
                name="country"
                disablePortal
                id="combo-box-demo"
                options={countries && countries}
                sx={{
                  width: 300,
                }}
                onChange={(e) => {
                  setCountryData({
                    ...countryData,
                    country: e.target.innerText,
                  });
                  onCountryChange(e);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Country" />
                )}
              />
            </div>
            <div className="me-2">
              <Autocomplete
                name="city"
                disablePortal
                id="combo-box-demo"
                options={city ? city : []}
                sx={{ width: 300 }}
                onChange={(e) => {
                  setCountryData({
                    ...countryData,
                    city: e.target.innerText,
                  });
                }}
                renderInput={(params) => <TextField {...params} label="City" />}
              />
            </div>
            <div className="me-2">
              <Autocomplete
                name="property"
                disablePortal
                id="combo-box-demo"
                options={Proprety}
                sx={{ width: 300 }}
                onChange={(e) => {
                  setCountryData({
                    ...countryData,
                    property: e.target.innerText,
                  });
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Property" />
                )}
              />
            </div>

            <button
              onClick={saveData}
              type="button"
              className="btn btn-primary  ms-5 rounded"
            >
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
