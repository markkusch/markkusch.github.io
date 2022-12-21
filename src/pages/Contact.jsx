import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Contact() {
  return (
    <Row className="main-content vertical-center w-100 p-5">
      <Col className="contact-left anim-first mb-5">
        <h1>Let's get in touch!</h1>
        <h2>
          I'm always looking for new opportunities. <br />
          Feel free to contact me.
        </h2>
      </Col>
      <Col className='contact-right anim-second text-end'>
          <h1> markuschue@gmail.com </h1>
          <h2> +34 648 40 21 74 </h2>
        <Row className="mt-5 justify-content-end">
          <Col xs={2}>
            <h4>
              <a href="https://www.linkedin.com/in/markuschu/">
                <img className="cover" src="/images/linkedin-logo.png" alt="email" />
              </a>
            </h4>
          </Col>
          <Col xs={2}>
            <h4>
              <a href="https://www.github.com/markuschue">
                <img className="cover" src="/images/github-logo.png" alt="email" />
              </a>
            </h4>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Contact;