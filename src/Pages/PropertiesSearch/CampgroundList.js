import React from "react";
import CampGrounds from "../../component/Properties/PropertiesCom/CampCom";
import HotelsCom from "../../component/Properties/PropertiesCom/HotelsCom";
import SearchCom from "../../component/Properties/Search/SearchCom";

export default function CampsSearch() {
  return (
    <>
      <div className="container-lg mt-5">
        <div className="row">
          <SearchCom />
          <CampGrounds />
        </div>
      </div>
    </>
  );
}
