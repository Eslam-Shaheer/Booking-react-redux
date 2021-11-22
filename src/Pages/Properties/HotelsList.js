import React from 'react'
import HotelsCom from '../../component/Properties/PropertiesCom/HotelsCom'
import SearchCom from '../../component/Properties/Search/SearchCom'


export default function HotelsList() {



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
