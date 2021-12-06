import React from 'react'

export default function BookingDetails() {
    return (
        <>
      
        <div className="border p-3 my-3">
            <h6 className='fw-bold'>Your Booking Details</h6>
            <div className="row my-3">

            <div className="col-6">
                <span>Check-in</span>
                <div className="border-end">
                <h6>Wed, Dec 8, 2021</h6>
                <span className="text-muted">From 2:00 PM</span>
                </div>
            </div>
            <div className="col-6">
            <span>Check-out</span>
            <div >
                <h6>Fri, Dec 10, 2021</h6>
                <span className="text-muted">Until 12:00 PM</span>
            </div>
            </div>
            </div>

            <div className="">
                <span>
                Total length of stay:
                </span> <br/>
                <strong>
                2 nights
                </strong>
            </div>
                        <hr/>

             <div className="">
                <strong>
                You selected:
                </strong>
                 <br/>
                 <span>
                 2 x Double Room
                </span>
            </div>
        </div>
        <div className="border p-3 my-3">
        <h6 className="fw-bold">Your price summary</h6>

        <div >
            <div className="d-flex justify-content-between mb-1">

        <span>2 rooms</span>
        <span>EGP 8,829.30</span>
            </div>
        <div className="d-flex justify-content-between">
        <span>10 % VAT</span>
        <span>EGP 882.93</span>
        </div>
        </div>
        <div className="d-flex justify-content-between my-3">
        <strong>Price</strong>
        <strong>EGP 9,712.23 *</strong>
        </div>
        </div>
        
        </>
    )
}
