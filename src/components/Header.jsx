import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Header() {
  const [activeStatus, setActiveStatus] = React.useState({
    work: false,
    about: false,
    contact: false,
  });

  let location = useLocation().pathname;

  React.useEffect(() => {
    if (location === '/') {
      setActiveStatus({ work: false, about: false, contact: false });
    } else if (location === '/work') {
      setActiveStatus({ work: true, about: false, contact: false });
    } else if (location === '/about') {
      setActiveStatus({ work: false, about: true, contact: false });
    } else if (location === '/contact') {
      setActiveStatus({ work: false, about: false, contact: true });
    }
  }, [location]);

  const navItems = (
    <>
      <Nav.Item className="mx-3">
        <Nav.Link href="/#/work" active={activeStatus.work}>Work</Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-3">
        <Nav.Link href="/#/about" active={activeStatus.about}>About me</Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-3">
        <Nav.Link href="/#/contact" active={activeStatus.contact}>Contact</Nav.Link>
      </Nav.Item>
    </>
  )

  return (
    <Navbar variant="dark" expand="lg" className='page-header'>
      <Navbar.Brand href="/" className="ms-4">
        <img src="/images/logo.png" alt="icon" />
      </Navbar.Brand>
      <Navbar.Toggle className="me-4" />
      <Navbar.Collapse>
        <Nav className="justify-content-end me-4" style={{ width: "100%" }}>
          <div className="d-flex d-lg-none flex-row justify-content-center">
            {navItems}
          </div>
          <div className="d-none d-lg-flex flex-row justify-content-end">
            {navItems}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;