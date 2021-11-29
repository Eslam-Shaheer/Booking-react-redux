import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  DropdownButton,
  Dropdown,
  FloatingLabel,
  Form,
  Modal,
  ButtonGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentByPostId } from "../../../../Redux/actions/comment";
import { axiosInstance } from "../../../../Redux/network";
import Comment from "../../Comment/Comment";
import "./SinglePost.css";

export default function SinglePost(props) {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState(props.post);
  const [btnComment, setbtnComment] = useState(false);
  const [putPost, setPutPost] = useState(false);
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState();
  const [commentLength, setCommentLength] = useState(0);
  const [isOwner, setisOwner] = useState();
  const [isCommentOwner, setisCommentOwner] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [postImageChange, setPostImageChange] = useState();
  const [updatedPost, setUpdatedPost] = useState(posts);

  useEffect(() => {
    axiosInstance.get("comment/post/" + props.post._id).then((result) => {
      setCommentLength(result.data.data.length);
    });
    axiosInstance.get("user/loggedIn/").then((result) => {
      if (
        posts.userId._id == result.data.data._id ||
        result.data.data.type == "admin"
      ) {
        setisOwner(true);
      } else {
        setisOwner(false);
      }
      // console.log(posts);
    });
  }, []);

  const deletePost = (id) => {
    if (window.confirm("Are you sure you want delete thi post!!")) {
      axiosInstance.delete("post/" + id).then((result) => {
        window.location.reload();
      });
    }
  };

  const updatePost = (id) => {
    if (postImageChange) {
      const formData = new FormData();
      formData.append("multiple_images", postImageChange, postImageChange.name);
      // console.log(postImageChange);
      axiosInstance.post("upload/image/multiple", formData).then((result) => {
        let image = result.data.data[0];
        // console.log(result, image);
        let newPost = updatedPost;
        newPost.postImage = image;
        // console.log(newPost, "new post");

        axiosInstance.put("post/" + id, newPost).then((result) => {
          if (result.data.success) {
            window.location.reload();
          } else {
            alert(result.data.msg);
          }
        });
      });
    } else {
      axiosInstance.put("post/" + id, updatedPost).then((result) => {
        if (result.data.success) {
          window.location.reload();
        } else {
          alert(result.data.msg);
        }
      });
    }
  };

  //  myWork

  const handelChangePost = (event) => {
    // console.log(updatedPost);
    let name = event.target.name;
    let value = event.target.value;
    setUpdatedPost({ ...updatedPost, [name]: value });
  };
  const clearCommentImage = () => {
    setSelectedFile(false);
  };

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onPostImageChange = (event) => {
    setPostImageChange(event.target.files[0]);
  };

  let getComments = (id) => {
    axiosInstance.get("comment/post/" + id).then((result) => {
      let allComment = result.data.data;

      axiosInstance.get("user/loggedIn/").then((result) => {
        for (let com of allComment) {
          // console.log(allComment);
          if (
            com.userId._id == result.data.data._id ||
            result.data.data.type == "admin"
          ) {
            com.isOwner = true;
          } else {
            com.isOwner = false;
          }
        }
        // console.log(allComment);
        setComment(allComment);
      });
    });
  };

  const saveComment = (id) => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("multiple_images", selectedFile, selectedFile.name);
      axiosInstance.post("upload/image/multiple", formData).then((result) => {
        // console.log(result);
        let image = result.data.data[0];
        let newcomment = newComment;
        newcomment.commentImg = image;

        setNewComment(newcomment);

        axiosInstance.post("comment/" + id, newComment).then((result) => {
          if (result.data.success) {
            axiosInstance.get("comment/post/" + id).then((result) => {
              let allComment = result.data.data;
              axiosInstance.get("user/loggedIn/").then((result) => {
                for (let com of allComment) {
                  // console.log(allComment);
                  if (com.userId._id == result.data.data._id) {
                    com.isOwner = true;
                  } else {
                    com.isOwner = false;
                  }
                }

                setComment(allComment);
                setCommentLength(allComment.length);
              });
            });
          } else {
            alert(result.data.msg);
          }
        });
      });
    } else {
      axiosInstance.post("comment/" + id, newComment).then((result) => {
        if (result.data.success) {
          axiosInstance.get("comment/post/" + id).then((result) => {
            let allComment = result.data.data;
            axiosInstance.get("user/loggedIn/").then((result) => {
              for (let com of allComment) {
                // console.log(allComment);
                if (com.userId._id == result.data.data._id) {
                  com.isOwner = true;
                } else {
                  com.isOwner = false;
                }
              }

              setComment(allComment);
              setCommentLength(allComment.length);
            });
          });
        } else {
          alert(result.data.msg);
        }
      });
    }
  };

  const onChangeComment = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="card border mb-3 postCard">
        <div class="d-flex flex-row bd-highlight my-2 px-3 pb-1  Border">
          <div class="p-0 bd-highlight">
            <img
              src={
                posts.userId.personalImage
                  ? posts.userId.personalImage
                  : "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
              }
              className="imgStyle"
            ></img>
          </div>
          <div class="p-2  bd-highlight me-auto">
            <h6>{posts.userId.username}</h6>
          </div>
          <div>
            {isOwner && (
              <ButtonGroup>
                <DropdownButton
                  as={ButtonGroup}
                  title={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  }
                  id="bg-nested-dropdown"
                  className=""
                  size="sm"
                >
                  <Dropdown.Item onClick={() => setPutPost(true)}>
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => deletePost(posts._id)}>
                    Delete
                  </Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            )}
            <Modal
              show={putPost}
              onHide={() => setPutPost(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Edit Post
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Add Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={updatedPost.location}
                    onChange={handelChangePost}
                    placeholder="e.g. city ,region ,district or specific hotel"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    title <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="title"
                    value={updatedPost.title}
                    onChange={handelChangePost}
                    placeholder="e.g. 'When is the best time to visit the Colosseum?' "
                  />
                  <Form.Label>
                    What kind of advice are you looking for ?
                    <span className="text-danger"> *</span>
                  </Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      name="body"
                      value={updatedPost.body}
                      onChange={handelChangePost}
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Control
                    type="file"
                    size="sm"
                    name="postImage"
                    onChange={onPostImageChange}
                  />
                </Form.Group>
                <Button
                  onClick={() => updatePost(updatedPost._id)}
                  className="btn btn-primary"
                  type="submit"
                >
                  Add Post
                </Button>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <Container>
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight w-25 ">
              <button className="btn btn-outline-primary fs-6 d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  class="bi bi-geo-alt me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <div className="d-felx align-items-center p-0">
                  <p className="p-0 my-auto">{posts.location}</p>
                </div>
              </button>
            </div>
          </div>
          <div onClick={() => getComments(posts._id)}>
            <div className="primary mb-3" onClick={() => setShow(true)}>
              <h3>{posts.title}</h3>
              <div className="text-secondary">{posts.createdAt}</div>
              <span className="fs-6">
                {posts.body.substring(0, 150)} ...
                <a href="#">Read more</a>
              </span>
              <img
                className="my-3 responsive"
                src={posts.postImage}
                width="100%"
              ></img>
            </div>
          </div>

          <div class="d-flex bd-highlight bg-light mb-2 commentDiv p-1">
            <div class="p-2  flex-grow-1 ">
              <a
                style={{ cursor: "pointer" }}
                className="text-decoration-none"
                onClick={() => {
                  setShow(true);
                  getComments(posts._id);
                }}
              >
                Comments {commentLength}
              </a>
              <span>
                <svg
                  class="bk-icon -iconset-eye post-preview-actions__views-icon-extra-class ms-5 me-1"
                  width="22"
                  height="22"
                  viewBox="0 0 128 128"
                  fill="#0071c2"
                >
                  <path d="M80 64a16 16 0 1 1-31.3-4.7 8 8 0 1 0 10.6-10.6A16 16 0 0 1 80 64zm39.3 2.3c-6 8.5-28.5 37.7-55.3 37.7S14.7 74.8 8.7 66.3a4 4 0 0 1 0-4.6C14.7 53.2 37.2 24 64 24s49.3 29.2 55.3 37.7a4 4 0 0 1 0 4.6zM88 64a24 24 0 1 0-24 24 24 24 0 0 0 24-24z"></path>
                </svg>
                0{" "}
              </span>
            </div>
            <div class="p-2 bd-highlight">
              <span>
                <svg
                  data-component="communities/common/collect-icon"
                  data-selected="0"
                  class="
        collect-icon
        collect-icon--empty
        js-bookmark-icon
    "
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  width="22"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M100 8H28a4 4 0 0 0-4 4v104a4 4 0 0 0 2.2 3.6 4 4 0 0 0 1.8.4 4 4 0 0 0 2.5-.8L64 93l33.5 26a4 4 0 0 0 2.5.9 4 4 0 0 0 1.8-.4 4 4 0 0 0 2.2-3.6V12a4 4 0 0 0-4-4z"
                    stroke="none"
                    stroke-width="1px"
                    fill="#0071c2"
                  ></path>
                </svg>
                0
              </span>
            </div>
            <div class="p-2 bd-highlight">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#0071c2"
                  class="bi bi-hand-thumbs-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
                0
              </span>
            </div>
          </div>
          <Modal
            size="xl"
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {posts.title.substring(0, 90)} ...
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-light">
              <div className="row justify-content-between">
                <div className="col-6">
                  <div className="card p-3 ">
                    <div class="d-flex flex-row bd-highlight   Border">
                      <div class="p-2 bd-highlight">
                        <img
                          src={
                            posts.userId.personalImage
                              ? posts.userId.personalImage
                              : "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                          }
                          className="imgStyle"
                        ></img>
                      </div>
                      <div class="p-2 bd-highlight d-flex align-items-center">
                        <h6>{posts.userId.username}</h6>
                      </div>
                    </div>
                    <div class="d-flex flex-row bd-highlight mb-3">
                      <div class="p-2 bd-highlight w-25 ">
                        <button className="btn btn-outline-primary fs-6 d-flex align-items-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            fill="currentColor"
                            class="bi bi-geo-alt me-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          </svg>
                          <p className="my-auto">{posts.location}</p>
                        </button>
                      </div>
                    </div>

                    <div className="text-secondary">{posts.createdAt}</div>
                    <span className="fs-5 ">{posts.body}</span>
                    <div class="d-flex bd-highlight bg-light mb-2 rounded-5 p-1">
                      <div class="p-2 flex-grow-1 bd-highlight">
                        <a className="text-decoration-none" href="#">
                          Comment {commentLength}
                        </a>
                      </div>
                      <div class="p-2 bd-highlight">
                        <span>
                          <svg
                            data-component="communities/common/collect-icon"
                            data-selected="0"
                            class=" collect-icon collect-icon--empty js-bookmark-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="22"
                            width="22"
                            viewBox="0 0 128 128"
                          >
                            <path
                              d="M100 8H28a4 4 0 0 0-4 4v104a4 4 0 0 0 2.2 3.6 4 4 0 0 0 1.8.4 4 4 0 0 0 2.5-.8L64 93l33.5 26a4 4 0 0 0 2.5.9 4 4 0 0 0 1.8-.4 4 4 0 0 0 2.2-3.6V12a4 4 0 0 0-4-4z"
                              stroke="none"
                              stroke-width="1px"
                              fill="#0071c2"
                            ></path>
                          </svg>
                          0
                        </span>
                      </div>
                      <div class="p-2 bd-highlight">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="#0071c2"
                            class="bi bi-hand-thumbs-up"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                          </svg>
                          0
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      {posts.postImage && (
                        <img
                          className="my-3 responsive"
                          src={posts.postImage}
                          width="100%"
                        ></img>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-6 overflow-auto">
                  <button
                    className="btn btn-outline-primary mt-2 w-100 mb-3"
                    onClick={() => {
                      setbtnComment(true);
                      setSelectedFile(false);
                      setNewComment({});
                    }}
                  >
                    Leave Comment
                  </button>

                  <Modal
                    show={btnComment}
                    onHide={() => setbtnComment(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        Leave Comment
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="comment"
                      >
                        <Form.Control
                          as="textarea"
                          onChange={onChangeComment}
                          name="body"
                          placeholder="Type your comment here"
                          style={{ height: "200px" }}
                        />
                      </FloatingLabel>

                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control type="file" onChange={onFileChange} />
                      </Form.Group>

                      <Button
                        className="btn w-100 h-100 btn-primary"
                        onClick={() => {
                          setbtnComment(false);
                          saveComment(posts._id);
                        }}
                      >
                        Comment
                      </Button>
                    </Modal.Body>
                  </Modal>

                  {comment &&
                    comment.map((com) => {
                      return (
                        <Comment
                          com={com}
                          posts={posts}
                          comment={comment}
                          setComment={setComment}
                          setCommentLength={setCommentLength}
                        />
                      );
                    })}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </>
  );
}
