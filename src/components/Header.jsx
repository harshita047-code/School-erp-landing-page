import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Button } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import logo from '../assets/logo.jpeg'
import './Header.css'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <Navbar className="navbar bg-white shadow-sm">
        <Container className="d-flex justify-content-between align-items-center">
          
          <Navbar.Brand href="#" className="fw-bold text-primary fs-4">
          <img src={logo} alt="Logo" style={{ width: '200px', height: '35px' }} />
          </Navbar.Brand>

          
          <Button
            variant="outline-danger"
            onClick={toggleMenu}
            className="d-flex align-items-center"
          >
            <BsList size={24} />
          </Button>
        </Container>
      </Navbar>

      
      <Offcanvas show={showMenu} onHide={toggleMenu} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="tittle-offcanvas">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled fs-5">
            <li><a href="#features">Features</a></li>
            <li><a href="#modules">Module Overview</a></li>
            <li><a href="#faqs">FAQs </a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
// https://script.google.com/macros/s/AKfycbxHuK-1TEKLG5jNbRHg40b_raXBuMI0tVXSfz2YimZEh9q-5cfQPbRlRo5yU9vOkB96/exec
export default Header;
