import React from 'react';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import './footer.css'
const Footer = () => {
    return (
      <div className="footer-outer-container">
        <div>
          <div className="social-media-container">
           
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <YouTubeIcon />
           
          </div>
          <div className="footer-inner-wrapper">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
                <li className="service-code">Service Code</li>
                <li> &copy; 1997-2004 Netflix Inc </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;
