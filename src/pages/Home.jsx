import * as React from 'react';
import { Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <Container id="index" className='main-content vertical-center text-center'>
      <Row className="anim-first">
        <h1>Hi, <br />
          I'm Markus
        </h1>
      </Row>
      <Row className="mt-4 anim-second">
        <h2>
          Computer Engineer <br />
          and Developer.
        </h2>
      </Row>
      <Row className="justify-content-center mt-4 anim-third">
        <img src="/images/single-star.png" alt='star decoration' />
      </Row>
    </Container>
  )
}

export default Home;