import React, { useEffect, useState } from "react";
import "./Search.css";
import map from "../../../Static/map.png";
import { Button, Modal } from "react-bootstrap";
import CustomMap from "../../CustomMap/CustomMap"
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

export default function Search() {
   const [show, setShow] = useState(false);
  const [countryData, setCountryData] = useState();
  const [city, setCity] = useState();
  const [countries, setCountries] = useState();
  const [allData, setAllData] = useState();

      useEffect(() => {
        axios
          .get("https://countriesnow.space/api/v0.1/countries")
          .then((res) => {
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

   };

   const saveData = () => {
     console.log(countryData);
   };

  return (
    <>
      <div className="price fst-italic fw-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-tag-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>{" "}
        We Price Match
      </div>
      <div className="search p-3 rounded ">
        <h4>Search</h4>
           <div className="inp mb-2 mt-3">
            <Autocomplete
              name="country"
              disablePortal
              id="combo-box-demo"
              options={countries && countries}
              sx={{
                width: "100%",
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

          <div className="inp mb-2 mt-4">
            <Autocomplete
              name="city"
              disablePortal
              id="combo-box-demo"
              options={city ? city : []}
              sx={{ width: "100%" }}
              onChange={(e) => {
                setCountryData({
                  ...countryData,
                  city: e.target.innerText,
                });
              }}
              renderInput={(params) => <TextField {...params} label="City" />}
            />
          </div>
          <div className="dropdown mb-2 mt-4">
            <Autocomplete
              name="property"
              disablePortal
              id="combo-box-demo"
              sx={{ width: "100%" }}
              options={Proprety}
              renderInput={(params) => (
                <TextField {...params} label="Property" />
              )}
            />
          </div>

          <div className="checkbox mb-1">
            <input type="checkbox" id="entier" />{" "}
            <label htmlFor="entier ">Entire homes & apartments</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
          </div>
          <div className="checkbox mb-1 ">
            <input type="checkbox" id="workk" />{" "}
            <label htmlFor="workk ">I'm traveling for work</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
          </div>
          <button
            className="btn-primary w-100 p-2 fs-5 my-2"
            onClick={saveData}
          >
            Search
          </button>
       </div>

      <div className="imgDiv" onClick={() => setShow(true)}>
        <img className="w-100" src={map} alt="" />
        <div className="btnDiv">
          <button className="btn btn-primary">Show on map</button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomMap />
        </Modal.Body>
      </Modal>
    </>
  );
}
