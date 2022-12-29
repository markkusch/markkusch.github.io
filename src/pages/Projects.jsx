import React from 'react';
import { Col, Image } from 'react-bootstrap';
import ContentItem from '../components/ContentItem.jsx';
import Arrow from '../components/Arrow.jsx';
import ProjectImage from '../components/ProjectImage.jsx';

function Projects() {
  const [currentItem, setCurrentItem] = React.useState(0);
  const [animClass, setAnimClass] = React.useState('');
  const [isAnimating, setIsAnimating] = React.useState(false);

  const MERNBlog = (display) => (
    <ContentItem
      title="MERN Blog"
      subtitle="A custom blog made with the MERN stack."
      rightComponent={
        <Col xs={12} md={4} className='projects-right anim-second my-auto'>
          <ProjectImage
            src="/images/mern-blog.png"
            alt="MERN Blog"
            link="https://github.com/markuschue/react-blog"
            display={display}
            foreground= {(
              <div>
                <p>A mockup blog capable of composing, editing, deleting posts... And more!</p>
                <p>Made with MongoDB, Express.js, React.js and Node.js</p>
                <Image src="/images/github-logo.png" alt="Github Logo" className='my-auto h-25 w-25' />
              </div>
            )}
          />
        </Col>
      } 
    />
  );

  const hydrae = (display) => (
    <ContentItem
      title="Hydrae"
      subtitle="A 2D graphics engine based around gravity and collisions."
      rightComponent={
        <Col xs={12} md={4} className='projects-right anim-second my-auto'>
          <ProjectImage
            src="/images/hydrae.gif"
            alt="Hydrae"
            link="https://github.com/markuschue/hydrae"
            display={display}
            foreground={(
              <div>
                <p>A sandbox application for learning low level coding and playing around with physics.</p>
                <p>Written in C++ and SFML.</p>
                <Image src="/images/github-logo.png" alt="Github Logo" className='my-auto h-25 w-25' />
              </div>
            )}
          />
        </Col>
      } 
    />
  );

  const skettySender = (display) => (
    <ContentItem
      title="Sketty Sender"
      subtitle="A daily spaghetti newsletter."
      rightComponent={
        <Col xs={12} md={4} className='projects-right anim-second my-auto'>
          <ProjectImage
            src="/images/sketty-sender.png"
            alt="Sketty Sender"
            link="https://github.com/markuschue/sketty-sender"
            display={display}
            foreground={(
              <div>
                <p>A daily newsletter of random spaghetti images.</p>
                <p>Made with Node.js, Express.js and MongoDB.</p>
                <Image src="/images/github-logo.png" alt="Github Logo" className='my-auto h-25 w-25' />
              </div>
            )}
          />
        </Col>
      }
    />
  );
  
  const projects = [MERNBlog, hydrae, skettySender];

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
            {item(displayClass)}
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