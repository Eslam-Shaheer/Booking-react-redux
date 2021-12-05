import React, { useState, useEffect } from "react";
 import "./RunImg.css";

const Run = (props) => {
  const [campground, setCampground] = useState(props.campground);
  const [postsToShow, setPostsToShow] = useState([]);
 
  useEffect(() => {
    setCampground(props.campground);
    setPostsToShow(campground.images.slice(0, 9));
  }, []);

  return (
    <div className="Images">
      {postsToShow.map((post, index) => (
        <img key={index} src={post}></img>
      ))}
    </div>
  );
};
export default Run;
