import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../Redux/actions/post";
import { axiosInstance } from "../../../Redux/network";
import "./PostStructure.css";
import SinglePost from "./SinglePost/SinglePost";
export default function Example(props) {
  let [allPosts, setPosts] = useState();

  useEffect(() => {
    if (props.isUser) {
      axiosInstance.get("post/user/all").then((result) => {
        setPosts(result.data);
      });
    } else {
      axiosInstance.get("post").then((result) => {
        setPosts(result.data);
      });
    }
  }, []);

  return (
    <div className="col-7">
      {allPosts &&
        allPosts.data.reverse().map((pst) => {
          return <SinglePost post={pst} isUser={props.isUser} />;
        })}
    </div>
  );
}
