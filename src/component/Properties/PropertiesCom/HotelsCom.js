import React, { useEffect, useState } from "react";
import Hotel from "./Property/Hotel";
import "./PropertiesCom.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getHotels } from "../../../Redux/actions/hotel";
import {
  getLowStars,
  getTopRev,
  getTopStars,
} from "../../../Redux/actions/propsFilter";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";

export default function Properties() {
  let hotels = useSelector((state) => state.hotel.getHotels);
  let revProps = useSelector((state) => state.reviewSorting);
  let [allProps, setHotels] = useState();
  const dispatch = useDispatch();

  const lowStarsSorting = () => {
    setHotels(revProps.getLowStars);
  };
  const TopStarsSorting = () => {
    setHotels(revProps.getTopStars);

    console.log(revProps);
  };
  const TopReviewsSorting = () => {
    setHotels(revProps.getTopRev);
  };

  const LatestHotels = () => {
    setHotels(hotels);
  };
  useEffect(() => {
    setHotels(hotels);
  }, [hotels]);

  useEffect(() => {
    dispatch(getHotels());
    dispatch(getTopRev("hotel"));
    dispatch(getTopStars("hotel"));
    dispatch(getLowStars("hotel"));
    console.log(revProps);
  }, []);
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div className="col-md-9   rounded">
        <div className="text d-flex justify-content-between">
          <h3 className="align-self-center">
            {t("Properties.PropertiesCom.HotelCom.Austin 473 properties found")}
          </h3>
          <div className="mapbtn ">
            <button className="btn btn-primary fw-bold " type="button">
              {t("Properties.PropertiesCom.HotelCom.Show on map")}
            </button>
          </div>
        </div>

        <div className="">
          <ButtonGroup className="mb-2">
            <Button variant="outline-primary" onClick={LatestHotels}>
              {t("Properties.PropertiesCom.HotelCom.Latest Hotels")}
            </Button>
            <Button variant="outline-primary" onClick={TopReviewsSorting}>
              {t("Properties.PropertiesCom.HotelCom.Top Reviews")}
            </Button>
            <Button variant="outline-primary" onClick={TopStarsSorting}>
              {t("Properties.PropertiesCom.HotelCom.Stars (highest first)")}
            </Button>
            <Button variant="outline-primary" onClick={lowStarsSorting}>
              {t("Properties.PropertiesCom.HotelCom.Stars (Lowest first)")}
            </Button>
          </ButtonGroup>
        </div>
        <div className="properties">
          {allProps &&
            allProps.data.map((prop) => {
              if (prop.status == "accepted") {
                return <Hotel prop={prop} type={"hotel"} />;
              }
            })}
        </div>
      </div>
    </>
  );
}
