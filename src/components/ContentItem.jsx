import * as React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';

function ContentItem({ title, subtitle, rightComponent }) {
  const verticalDivider = (
    <Col className="anim-first d-md-block d-none my-auto">
      <Stack gap={3} className="h-100 align-items-center">
        <div className='vertical-line' />
        <img src="/images/single-star.png" alt="*" className='line-star' />
        <div className='vertical-line' />
      </Stack>
    </Col>
  );

  const horizontalDivider = (
    <Row className="anim-first my-3 d-md-none justify-content-center">
      <Col xs = {5} className="my-auto mx-auto">
        <hr className='horizontal-line' />
      </Col>
      <Col xs = {2} className="my-auto mx-auto">
        <img src="/images/single-star.png" alt="*" className='line-star'/>
      </Col>
      <Col xs = {5} className="my-auto mx-auto">
        <hr className='horizontal-line' />
      </Col>
    </Row>
  );

  return (
    <>
      <Row className="main-content p-5 justify-content-center my-auto">
        <Col className="content-left anim-first mt-5 my-auto">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </Col>
        {verticalDivider}
        {horizontalDivider}
        {rightComponent}
      </Row>
    </>
  )
}

export default ContentItem;