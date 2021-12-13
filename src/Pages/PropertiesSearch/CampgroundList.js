import React from "react";
import CampGrounds from "../../component/Properties/PropertiesCom/CampCom";
import HotelsCom from "../../component/Properties/PropertiesCom/HotelsCom";
import SearchCom from "../../component/Properties/Search/SearchCom";
import { useParams } from "react-router-dom";
export default function CampsSearch() {
  const { country, city } = useParams();
  return (
    <>
      <div className="container-lg mt-5">
        <div className="row">
          <SearchCom />
          <CampGrounds country={country} city={city} />
        </div>
      </div>
    </>
  );
}
