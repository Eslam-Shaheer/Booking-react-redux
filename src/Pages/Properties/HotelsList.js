import React, { useEffect } from 'react'
import HotelsCom from '../../component/Properties/PropertiesCom/HotelsCom'
import SearchCom from '../../component/Properties/Search/SearchCom'


export default function HotelsList() {

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
                <HotelsCom/>
            </div>

        </div>
        </>
    )
}
