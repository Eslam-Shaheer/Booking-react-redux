import React, { useEffect } from 'react'
import CampGrounds from '../../component/Properties/PropertiesCom/CampCom'
import HotelsCom from '../../component/Properties/PropertiesCom/HotelsCom'
import SearchCom from '../../component/Properties/Search/SearchCom'


export default function CampsList() {
useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "instant",
   });
}, []);



    return (
        <>
        <div className="container-lg mt-5">
           
            <div className="row">
                <SearchCom/>
                <CampGrounds/>
            </div>

        </div>
        </>
    )
}
