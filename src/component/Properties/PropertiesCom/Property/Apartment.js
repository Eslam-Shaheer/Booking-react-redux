import React from 'react'
import './Property.css'
import StaticHotel from '../../images/img.jpg'
import Like from '../../images/like.svg'


export default function Apartment(props) {

    return (
        <div className="card mb-3 p-3" >
        <div className="row g-0">
          <div className="col-md-3 img">
            <img src={props.prop.images[0]} className="img-fluid rounded-start h-100 " alt="..."/>
              <i className="far fa-heart"></i>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title "><a href="#" className="text-decoration-none">{props.prop.apartmentName}</a></h5>
              <div className="stars">
          
                 <img src={Like} alt=""/>
              </div>
              <div >
              <a href="#" className="card-text ">{props.prop.city} , {props.prop.streetAddress}</a> <span className="dotspan "></span> <a href="#" className="card-text"> Show on map </a> <span className="dotspan"></span>
              <p className="card-text "><small >0.3 km from center</small></p></div>
              <p className="p-desc">Only steps from Austin's State Capitol building and within walking distance of other attractions, this hotel features spacious guestrooms furnished with coffeemakers and knowledgeable on-site...</p>
            </div>
          </div>
          <div className="col-md-2">
              <div className="row">
                  <div className="reviews col-lg-8 ">
                      <a className="text-muted " href="#">reviews {props.prop.totalReviews}</a>
                  </div>
                  <div className="rate col-lg-4  d-flex justify-content-center ">
                      <a className="align-self-center text-decoration-none" href="#">{props.prop.avgReviews}</a>
                  </div>
              </div>
              <div className="row">
                <div className="col-lg-2 "></div>
              </div>
              <button className="btn btn-primary fw-bold mt-3" type="button">Show Details</button>
          </div>
        </div>
      </div>

    )
}
