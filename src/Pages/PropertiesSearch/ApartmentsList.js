import React from "react";
import Apartments from "../../component/Properties/PropertiesCom/ApartmentCom";

import SearchCom from "../../component/Properties/Search/SearchCom";
import { useParams } from "react-router-dom";
export default function ApartmentsSearch() {
  const { country, city } = useParams();
  console.log(country, city, "aaaaaaaaaaaaa");
  return (
    <>
      <div className="container-lg mt-5">
        <div className="row">
          <SearchCom />
          <Apartments country={country} city={city} />
        </div>
      </div>
    </>
  );
}
