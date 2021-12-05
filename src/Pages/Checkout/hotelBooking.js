import React from 'react'
import Booking from '../../component/checkOut/Booking'
import BookingDetails from '../../component/checkOut/BookingDetails'

export default function HotelBooking() {
  
    return (
        <div className="container py-3">

        <div className="row py-3" >
            <div className="col-md-4">
                <BookingDetails/>
            </div>
            <div className="col-md-8">
            <Booking/>

            </div>

        </div>
        </div>
        )
}
