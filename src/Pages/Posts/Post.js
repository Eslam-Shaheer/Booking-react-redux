import React from "react";
import { Container } from "react-bootstrap";
import Addpost from "../../component/Posts/Add Post/Addpost";
import Communities from "../../component/Posts/Communities/Communities";
import Example from "../../component/Posts/PostStructure/PostStructure";

export default function Post() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Container>
        <Container>
          <Communities />
          <div className="row py-3 justify-content-between mx-1">
            <Addpost />
            <Example />
          </div>
        </Container>
      </Container>
    </div>
  );
}
