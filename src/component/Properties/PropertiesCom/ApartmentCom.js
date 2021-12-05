import React, { useEffect, useState } from "react";
import "./PropertiesCom.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getApartments } from "../../../Redux/actions/apartment";
import Hotel from "./Property/Hotel";
import {
  getLowStars,
  getTopRev,
  getTopStars,
} from "../../../Redux/actions/propsFilter";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default function Apartments() {
  let aparts = useSelector((state) => state.apartment.getApartments);
  let revProps = useSelector((state) => state.reviewSorting);
  let [allProps, setaparts] = useState();
  const dispatch = useDispatch();

  const TopReviewsSorting = () => {
    setaparts(revProps.getTopRev);
  };

  const LatestAparts = () => {
    setaparts(aparts);
  };
  useEffect(() => {
    setaparts(aparts);
  }, [aparts]);

  useEffect(() => {
    dispatch(getApartments());
    dispatch(getTopRev("apartment"));
    dispatch(getTopStars("apartment"));
    dispatch(getLowStars("apartment"));
    console.log(revProps);
  }, []);
  return (
    <>
      <div className="col-sm-9   rounded">
        <div className="text d-flex justify-content-between">
          <h3 className="align-self-center">Austin: 473 properties found</h3>
          <div className="mapbtn ">
            <button className="btn btn-primary fw-bold " type="button">
              Show on map
            </button>
          </div>
        </div>

        <div className="">
          <ButtonGroup className="mb-2">
            <Button variant="outline-primary" onClick={LatestAparts}>
              Latest Apartments
            </Button>
            <Button variant="outline-primary" onClick={TopReviewsSorting}>
              Top Reviews
            </Button>
          </ButtonGroup>
        </div>
        <div className="properties">
          {allProps &&
            allProps.data.map((prop) => {
              if (prop.status == "accepted") {
                return <Hotel prop={prop} type={"apartment"} />;
              }
            })}
        </div>
      </div>
    </>
  );
}
