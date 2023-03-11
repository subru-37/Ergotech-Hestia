import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="main-name">
            <h1>Hestia</h1>
          </div>
          <div className="options">
            <h4>Home</h4>
            <h4>Search</h4>
            <h4>About Us</h4>
          </div>
          <div className="socials">
            <a href='/' className="icons"><InstagramIcon/></a>
            <a href='/' className="icons"><FacebookIcon/></a>
            <a href='/' className="icons"><TwitterIcon/></a>
            <a href='https://github.com/subru-37/Ergotech-Hestia' rel="noopener noreferrer" target='_blank' className="icons"><GitHubIcon/></a>
          </div>
        </div>
      </div>
      <div className="end-credits">
        <h2>Made with</h2>
        <h2>Team Hestia <span role="img" aria-label="purple-heart">💜</span></h2>
      </div>
    </div>
  );
};

export default Footer;
