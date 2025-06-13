import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import './Footer.css';
import logo from '../assets/logo.jpeg'


const Footer = () => {
  return (
    <footer className="modern-footer text-white">
      <Container>
        <div className="footer-content">
          <div className="footer-about" data-aos="fade-right">
          {/* <img src={logo} alt="Company Logo" className="footer-logo" /> */}
            <h5>About School ERP</h5>
            <p>
              School ERP is a powerful software solution that streamlines school
              management, enhances administrative efficiency, and supports better
              student learning.
            </p>
          </div>

          <div className="footer-center" data-aos="zoom-in">
            <h5>Contact Us</h5>
            <ul>
              <li><a href="mailto:support@digisolvnet.com">support@digisolvnet.com</a></li>
              <li><a href="tel:+917042386709">+91 7042386709</a></li>
              <li>India</li>
            </ul>
            <p>Join the School ERP revolution and make management easy.</p>
            <Button variant="custom" className="cta-button" href="#contact">Launch Your School</Button>
          </div>

          <div className="footer-social" data-aos="fade-left">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1Nm7pWrRgm/?mibextid=wwXIfr"><FaFacebook /></a>
              <a href="https://x.com/digi_solv_net?s=11"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/digisolvnet/"><FaLinkedin /></a>
              <a href="https://www.instagram.com/digi_solv_net?igsh=MWhnODIxcTZwdGZqZA%3D%3D&utm_source=qr"><FaInstagram /></a>
            </div>
            <p className="copyright">
              &copy; 2025 School ERP. All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
