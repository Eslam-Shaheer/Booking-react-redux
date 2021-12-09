import React, { useEffect } from 'react'
import Apartments from '../../component/Properties/PropertiesCom/ApartmentCom'

import SearchCom from '../../component/Properties/Search/SearchCom'


export default function ApartmentsList() {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, [])


    return (
        <>
        <div className="container-lg mt-5">
           
            <div className="row">
                <SearchCom/>
                <Apartments/>
            </div>

        </div>
        </>
    )
}
