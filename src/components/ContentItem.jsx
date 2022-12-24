import * as React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';

function ContentItem({ title, subtitle, rightComponent }) {
  return (
    <Row className="main-content vertical-center w-100 p-5 justify-content-center">
      <Col className="content-left anim-first mb-5">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </Col>
      <Col className = "anim-first d-none d-md-block">
        <Stack gap={3} className="h-100 align-items-center">
          <div className='vertical-line' />
          <img src="/images/single-star.png" alt="*" className='line-star' />
          <div className='vertical-line' />
        </Stack>
      </Col>
      {rightComponent}
    </Row>
  )
}

export default ContentItem;