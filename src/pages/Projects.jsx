import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ContentItem from '../components/ContentItem.jsx';
import Arrow from '../components/Arrow.jsx';

function Projects() {
  const [currentItem, setCurrentItem] = React.useState(0);
  const [animClass, setAnimClass] = React.useState('');
  const [isAnimating, setIsAnimating] = React.useState(false);

  const MERNBlog = (
    <ContentItem
      title="MERN Blog"
      subtitle="A custom blog made with the MERN stack."
      rightComponent={
        <Col xs={12} md={4} className='projects-right anim-second text-end my-auto'>
          <Row>
            <h1> Coming soon! </h1>
          </Row>
          <Row>
            <h2> Stay tuned! </h2>
          </Row>
        </Col>
      } />
  );

  const hydrae = (
    <ContentItem
      title="Hydrae"
      subtitle="A 2D graphics engine based around gravity and collisions."
      rightComponent={
        <Col xs={12} md={4} className='projects-right anim-second text-end my-auto'>
          <Row>
            <h1> Coming soon! </h1>
          </Row>
          <Row>
            <h2> Stay tuned! </h2>
          </Row>
        </Col>
      } 
    />
  );
  
  const projects = [MERNBlog, hydrae];

  const handleItemsChange = React.useCallback((direction) => {
    if (isAnimating) return;
    setAnimClass('anim-out');
    setIsAnimating(true);
    setTimeout(() => {
      if (direction === 'down' && currentItem < projects.length - 1) {
        setCurrentItem(currentItem + 1);
      } else if ( direction === 'up' && currentItem > 0) {
        setCurrentItem(currentItem - 1);
      }
      setAnimClass('anim-fast');
    }, 500);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [currentItem, isAnimating, projects.length]);

  React.useEffect(() => {
    const handleScroll = event => {
      if (event.deltaY > 0) {
        handleItemsChange('down');
      } else {
        handleItemsChange('up');
      }
    };
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleItemsChange]);

  return (
    <div className={'main-content my-auto ' + animClass}>
      {currentItem > 0 ?
        <Arrow className="anim-second" direction="up" mt={0} onClick={() => handleItemsChange('up')} /> :
        <div className="p-5" />
      }
      {projects.map((item, index) => {
        let displayClass = 'd-none';
        if (index === currentItem) {
          displayClass = 'd-block';
        }
        return (
          <div key={index} className={displayClass}>
            {item}
          </div>
        );
      })}
      {(currentItem < projects.length - 1) ? 
        <Arrow className="anim-second" direction="down" mt={5} onClick={() => handleItemsChange('down')} /> :
        <div className="p-5" />
      }
    </div>
  );
}

export default Projects;