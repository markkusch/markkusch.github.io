import * as React from 'react';
import { Col } from 'react-bootstrap';
import ContentItem from '../components/ContentItem';
import Arrow from '../components/Arrow';

function About() {
  const [currentItem, setCurrentItem] = React.useState(0);
  const [animClass, setAnimClass] = React.useState('anim-second');
  const [isAnimating, setIsAnimating] = React.useState(false);
  
  const aboutIntroduction = (
    <div className={'anim-first pt-5'}>
      <h1> Hi, I'm Markus Schüller. </h1>
      <h3> I'm a Computer Engineer graduated in Universidad de La Laguna (2022) and living in Tenerife, Spain. </h3>
      <h3> I'm passionate about building great software, and I love to learn new things. </h3>
      <Arrow direction="down" mt={5} onClick={() => handleItemsChange('down')} />
    </div>
  );

  const aboutSkills = (
    <div className={'anim-first'}>
      <Arrow direction="up" mt={0} onClick={() => handleItemsChange('up')} />
      <h1> My skills </h1>
      <h3> I have knowledge in Full-Stack technologies such as React, Node.js, Express, MongoDB, and more. </h3>
      <h3> I also have experience with C++, Python, SQL and other technologies like Deep Learning and Git. </h3>
      <Arrow direction="down" mt={5} onClick={() => handleItemsChange('down')} />
    </div>
  );

  const aboutLife = (
    <div className={'anim-first'}>
      <Arrow direction="up" mt={0} onClick={() => handleItemsChange('up')} />
      <h1> My life </h1>
      <h3> Besides programming, I am very passionate about everything related to space! (Hence the style of this website). </h3>
      <h3> I also love travelling, photography, reading, and playing video games. </h3>
    </div>
  );

  const aboutRightComponents = [aboutIntroduction, aboutSkills, aboutLife];

  const handleItemsChange = React.useCallback((direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimClass('anim-out');
    setTimeout(() => {
      if (direction === 'down' && currentItem < aboutRightComponents.length - 1) {
        setCurrentItem(currentItem + 1);
      } else if (direction === 'up' && currentItem > 0) {
        setCurrentItem(currentItem - 1);
      }
      setAnimClass('anim-fast');
    }, 500);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [currentItem, isAnimating, aboutRightComponents.length]);

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
    <div className='main-content my-auto'>
      <ContentItem
        title="Who am I?"
        subtitle="About me, my skills and my life."
        rightComponent=
          <Col xs={12} md={5} className={animClass + ' my-auto about-right'}>
            {aboutRightComponents.map((item, index) => {
              let displayClass = 'd-none';
              if (index === currentItem) {
                displayClass = '';
              }
              return (
                <div key={index} className={displayClass}>
                  {item}
                </div>
              );
            })}
          </Col>
      />
    </div>
  );
}

export default About;