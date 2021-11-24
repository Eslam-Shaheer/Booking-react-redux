import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Container, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentByPostId } from "../../../../Redux/actions/comment";
import { axiosInstance } from "../../../../Redux/network";
import "./SinglePost.css";

export default function SinglePost(props) {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState(props.post);
  const [btnComment, setbtnComment] = useState(false);
  const [comment, setComment] = useState();
  const [newComment, setNewComment] = useState();

  // const comment = useSelector((state) => state.comment.getCommentByPostId);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getCommentByPostId(posts._id));
  }, []);
  let getComments = (id) => {
    console.log(id);
    axiosInstance.get("comment/post/" + id).then((result) => {
      setComment(result.data.data);
    });
  };

  const saveComment = (id) => {
    axiosInstance.post("comment/" + id, newComment).then((result) => {
      // if (result.data.success) {
      //    if(comment){setComment([...comment, newComment])}else{
      //      setComment([newComment])
      //    } 
      //  } else {
      //   alert(result.data.msg);
      // }
      console.log(result);
    });
    
  };

  const onChangeComment = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
    console.log(newComment);
  };

  return (
    <>
      <div className="card border mb-3">
        <Container>
          <div class="d-flex flex-row bd-highlight my-3  Border">
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
            <div class="p-2 bd-highlight ">
              <h6>{posts.userId.username}</h6>
              <span>3 Posts</span> | <span> 4 Comment</span>
            </div>
          </div>
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight w-25 ">
              <button className="btn btn-outline-primary fs-6">
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
                {posts.location}
              </button>
            </div>
          </div>
          <div onClick={() => getComments(posts._id)}>
            <div className="primary mb-3" onClick={() => setShow(true)}>
              <h2>{posts.title}</h2>
              <div className="text-secondary">{posts.createdAt}</div>
              <span>
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

          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight"></div>
          </div>
          <div class="d-flex bd-highlight bg-light mb-2 rounded-5 p-1">
            <div class="p-2 flex-grow-1 bd-highlight">
              <a className="text-decoration-none" href="#">
                Comment
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
                {posts.title.substring(0, 25)} ...
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-light">
              <div className="row justify-content-between">
                <div className="col-6">
                  <div className="card p-3 ">
                    <div class="d-flex flex-row bd-highlight my-3  Border">
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
                      <div class="p-2 bd-highlight ">
                        <h6>{posts.userId.username}</h6>
                        <span>3 Posts</span> | <span> 4 Comment</span>
                      </div>
                    </div>
                    <div class="d-flex flex-row bd-highlight mb-3">
                      <div class="p-2 bd-highlight w-25 ">
                        <button className="btn btn-outline-primary fs-6">
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
                          {posts.location}
                        </button>
                      </div>
                    </div>

                    <div className="text-secondary">{posts.createdAt}</div>
                    <span className="fs-4 ">{posts.body}</span>
                    <div class="d-flex bd-highlight bg-light mb-2 rounded-5 p-1">
                      <div class="p-2 flex-grow-1 bd-highlight">
                        <a className="text-decoration-none" href="#">
                          Comment
                        </a>
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
                  {/* <button className="btn btn-outline-primary w-100 mb-3">
                    Leave comment
                  </button> */}

                  <button
                    className="btn btn-outline-primary w-100 mb-3"
                    onClick={() => setbtnComment(true)}
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
                        <Form.Control type="file" />
                      </Form.Group>

                      <button
                        onClick={() => saveComment(posts._id)}
                        className="btn btn-primary"
                      >
                        <Button
                          className="btn btn-primary"
                          onClick={() => setbtnComment(false)}
                        >
                          Comment
                        </Button>
                      </button>
                    </Modal.Body>
                  </Modal>

                  {comment &&
                    comment.map((com) => {
                      return (
                        <Card className="mb-3 commentCard">
                          <Card.Header className="bg-white commentHeader">
                            <div className="d-flex">
                              <img
                                src={posts.userId.personalImage}
                                className="imgStyle me-2"
                              ></img>
                              <h6 className="mt-2">{com.userId.username} </h6>
                            </div>
                          </Card.Header>

                          <Card.Body>
                            <Card.Text>{com.body}</Card.Text>
                          </Card.Body>
                        </Card>
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
