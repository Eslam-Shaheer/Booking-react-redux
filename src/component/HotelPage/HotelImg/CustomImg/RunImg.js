import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../../../Redux/network";
import "./RunImg.css";
 
 

const Run = (props) => {
  const [hotel, setHotel] = useState(props.hotel);
  const [postsToShow, setPostsToShow] = useState([]);
console.log(hotel);
  useEffect(() => {

       setHotel(props.hotel);
      setPostsToShow(hotel.images.slice(0, 4));
 
  }, []);
  


  return (
    <div className="grid">
      {postsToShow.map((post, index) => (
        <img key={index} src={post}></img>
      ))}
    </div>
  );
 
          }
export default Run;
