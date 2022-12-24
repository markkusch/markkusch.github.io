import * as React from 'react';
import { Col } from 'react-bootstrap';
import ContentItem from '../components/ContentItem';

function About() {
  const [currentItem, setCurrentItem] = React.useState(0);
  const [animClass, setAnimClass] = React.useState('anim-second');
  
  const aboutIntroduction = (animClass) => (
    <Col xs={12} md={5} className={animClass + ' my-auto about-right'}>
      <h1> Hi, I'm Markus Schüller. </h1>
      <h3> I'm a Computer Engineer graduated in Universidad de La Laguna (2022) and living in Tenerife, Spain. </h3>
      <h3> I'm passionate about building great software, and I love to learn new things. </h3>
      <p className='text-center mt-5'>
        <img src="/images/arrow-down.png" alt="scroll down" className="arrow-img" onClick={() => handleItemsChange('down')} />
      </p>
    </Col>
  );

  const aboutSkills = (animClass) => (
    <Col xs={12} md={5} className={animClass + ' my-auto about-right'}>
      <p className='text-center'>
        <img src="/images/arrow-up.png" alt="scroll down" className="arrow-img" onClick={() => handleItemsChange('up')} />
      </p>
      <h1> My skills </h1>
      <h3> I have knowledge in Full-Stack technologies such as React, Node.js, Express, MongoDB, and more. </h3>
      <h3> I also have experience with C++, Python, SQL and other technologies like Deep Learning and Git. </h3>
      <p className='text-center mt-5'>
        <img src="/images/arrow-down.png" alt="scroll down" className="arrow-img" onClick={() => handleItemsChange('down')} />
      </p>
    </Col>
  );

  const aboutLife = (animClass) => (
    <Col xs={12} md={5} className={animClass + ' my-auto about-right'}>
      <p className='text-center'>
        <img src="/images/arrow-up.png" alt="scroll down" className="arrow-img" onClick={() => handleItemsChange('up')} />
      </p>
      <h1> My life </h1>
      <h3> Besides programming, I am very passionate about everything related to space! (Hence the style of this website). </h3>
      <h3> I also love travelling, photography, reading, and playing video games. </h3>
    </Col>
  );

  const aboutRightComponents = [aboutIntroduction, aboutSkills, aboutLife];

  const handleItemsChange = React.useCallback((direction) => {
    setAnimClass('anim-out');
    setTimeout(() => {
      if (direction === 'down') {
        if (currentItem < aboutRightComponents.length - 1) {
          setCurrentItem(currentItem + 1);
        }
      } else {
        if (currentItem > 0) {
          setCurrentItem(currentItem - 1);
        }
      }
    }, 1000);
    setTimeout(() => {
      setAnimClass('anim-fast');
    }, 1000);
  }, [currentItem, aboutRightComponents.length]);

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
    <>
      <ContentItem
        title="Who am I?"
        subtitle="About me, my skills and my life."
        rightComponent={aboutRightComponents[currentItem](animClass)}
        />
        
    </>
  );
}

export default About;