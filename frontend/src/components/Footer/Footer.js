import React from 'react';
import './Footer.css'; // Import the CSS file
import { FaWhatsapp, FaInstagram, FaFacebookF, FaInternetExplorer } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="thank-you">
      <div className="header">
        <p>Gold Valley, Sanaswadi, Maharashtra 402120</p>
      </div>
      <div className="content">
        <h1>Thank you...</h1>
        <p>Look forward to seeing you here!..</p>
        <p>Do click on the appropriate icon below to connect with us:</p>
        <p>Happy to connect with you through the following..</p>
      </div>
      <div className="contact">
        <div className="contact-item">
          <FaWhatsapp className="contact-icon whatsapp-icon"/>
          <p>+91 82373 30306<br />+91 94237 82141</p>
        </div>
        <div className="contact-item">
          <FaInstagram className="contact-icon instagram-icon"/>
          <p>@swaru_luxurious_villa</p>
        </div>
        <div className="contact-item">
          <FaFacebookF className="contact-icon facebook-icon"/>
          <p>Swaru Luxurious Villa</p>
        </div>
        <div className="contact-item">
          <FaInternetExplorer className="contact-icon web-icon"/>
          <p>www.book on Airbnb</p>
        </div>
        <div className="contact-item">
          <MdAttachEmail className="contact-icon email-icon"/>
          <p>swaruvilla@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
