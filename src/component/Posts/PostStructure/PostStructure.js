import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../Redux/actions/post";
import "./PostStructure.css";
import SinglePost from "./SinglePost/SinglePost";
export default function Example() {
  let Posts = useSelector((state) => state.post.getPosts);
  let [allPosts, setPosts] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    setPosts(Posts);
  }, [Posts]);

  return (
    <div className="col-7">
      {allPosts &&
        allPosts.data.reverse().map((pst) => {
          return <SinglePost post={pst} />;
        })}
    </div>
  );
}
