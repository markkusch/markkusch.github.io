import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import ContentItem from '../components/ContentItem';

function Contact() {
  let contactRight = (
    <Col xs={12} md={4} className='contact-right anim-second text-end my-auto'>
      <Row>
        <h1> markuschue@gmail.com </h1>
      </Row>
      <Row>
        <h2> +34 648 40 21 74 </h2>
      </Row>
      <Row className="my-5" />
      <Row className="mt-5 justify-content-end">
        <Col xs={2} className="mx-5">
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
  )

  return (
    <ContentItem 
      title="Let's get in touch!"
      subtitle="I'm always looking for new opportunities.
                Feel free to contact me."
      rightComponent={contactRight} />
  );
}

export default Contact;