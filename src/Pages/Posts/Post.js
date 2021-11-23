import React from 'react'
import { Container } from 'react-bootstrap';
import Addpost from '../../component/Posts/Add Post/Addpost';
import Communities from '../../component/Posts/Communities/Communities'
import Example from '../../component/Posts/PostStructure/PostStructure';

export default function Post() {
    return (
      <div className ="bg-light">
        <Container fluid>
          <Container>
            <Communities />
            <div className="row py-5">
              <Addpost />
              <Example />
            </div>
          </Container>
        </Container>
      </div>
    );
}
