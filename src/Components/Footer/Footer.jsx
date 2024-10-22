import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              We are passionate about bringing you the best organic and healthy foods. Our ingredients are sourced from the freshest and finest farms.
            </p>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Store</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Organic Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
