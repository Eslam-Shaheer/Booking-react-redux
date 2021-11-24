import React from 'react'
import Apartments from '../../component/Properties/PropertiesCom/ApartmentCom'

import SearchCom from '../../component/Properties/Search/SearchCom'


export default function ApartmentsList() {



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
