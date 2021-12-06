import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../Redux/network";
import "./Community.css";

export default function Community() {
  const [uae, setUae] = useState();
  const [france, setFrance] = useState();
  const [egypt, setEgypt] = useState();
  const [allPosts, setAllPosts] = useState();
  useEffect(() => {
    axiosInstance.get("filter/posts/uae").then((result) => {
      if (result.data.success) {
        setUae(result.data.data);
      }
    });
    axiosInstance.get("filter/posts/egypt").then((result) => {
      if (result.data.success) {
        setEgypt(result.data.data);
      }
    });
    axiosInstance.get("filter/posts/france").then((result) => {
      if (result.data.success) {
        setFrance(result.data.data);
      }
    });
    axiosInstance.get("post").then((result) => {
      if (result.data.success) {
        setAllPosts(result.data.data);
      }
    });
  }, []);
  return (
    <>
      <div className="container py-4 ">
        <h3 className="mb-4"> Connect with other travelers</h3>
        <div className="d-flex justify-content-between flex-column  flex-md-row">
          <div className="card border-0 mb-3 mx-auto CustomImg">
            <img
              className="h-75 rounded-2"
              src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/egypt/b7888ca3a1aeb3abbf6e965427e5ee717fb7f591.jpg"
              className="communityImg"
              alt="..."
            />
            <div className="card-body my-2 p-0  ">
              <p className="card-title  mb-2">Egypt</p>
              <p className="card-text text-muted mb-0">Travel community</p>
              {egypt && (
                <p className="card-text text-muted mb-0">
                  {egypt.length} travelers
                </p>
              )}
            </div>
          </div>
          <div className="card border-0 mb-3 mx-auto CustomImg">
            <img
              className="h-75 rounded-2"
              src="https://rockpowerbusiness.org/wp-content/uploads/2018/12/France.jpg"
              className="communityImg"
              alt="..."
            />
            <div className="card-body my-2 p-0  ">
              <p className="card-title  mb-2">France</p>
              <p className="card-text text-muted mb-0">Travel community</p>
              {france && (
                <p className="card-text text-muted mb-0">
                  {france.length} travelers
                </p>
              )}
            </div>
          </div>
          <div className="card border-0 mb-3 mx-auto CustomImg">
            <img
              className="h-75 rounded-2"
              src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142845.jpg"
              className="communityImg"
              alt="..."
            />
            <div className="card-body my-2 p-0  ">
              <p className="card-title  mb-2">UAE</p>
              <p className="card-text text-muted mb-0">Travel community</p>
              {uae && (
                <p className="card-text text-muted mb-0">
                  {uae.length} travelers
                </p>
              )}
            </div>
          </div>
          <div className="card border-0 mb-3 mx-auto CustomImg">
            <img
              className="h-75 rounded-2"
              src="https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/b2d5ae20ed65039fe73edbeea8b34ccfddbd63b4.png"
              className="communityImg"
              alt="..."
            />
            <div className="card-body my-2 p-0  ">
              <p className="card-title  mb-2">More communities</p>
              <p className="card-text text-muted mb-0">Travel community</p>
              {allPosts && (
                <p className="card-text text-muted mb-0">
                  {allPosts.length} travelers
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
