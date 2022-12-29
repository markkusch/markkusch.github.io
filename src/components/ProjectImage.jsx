import React from 'react';
import { Image } from 'react-bootstrap';

function ProjectImage({ src, alt, link, display, foreground }) {
  const [foregroundDisplay, setForegroundDisplay] = React.useState('d-none');

  function handleImageHover(mouseEnter) {
    if (window.innerWidth > 768)
      mouseEnter? setForegroundDisplay('d-none') : setForegroundDisplay('d-block');
  }

  React.useEffect(() => {
    setTimeout(() => {
      setForegroundDisplay(display);
    }, 2000);
  }, [display]);

  return (
    <a href = {link} target = '_blank' rel = 'noopener noreferrer'>
      <div 
        onMouseEnter={() => handleImageHover(true)}
        onMouseLeave={() => handleImageHover(false)}
      >
        <Image 
          src = {src}
          alt = {alt}
          className='project-img'
          fluid rounded
        />
        <div className={'project-img-foreground ' + foregroundDisplay} >
          {foreground}
        </div>
      </div>
    </a>
  );
}

export default ProjectImage;