import {
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterSite from "../FooterSite/FooterSite";
import "./Footer.css";

const footerData = [
  {
    id: 1,
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: 2,
    title: "Terms Of Service",
    link: "/terms-of-service",
  },
  {
    id: 3,
    title: "Free Photography",
    link: "/free-event-setup",
  },
  {
    id: 4,
    title: "Get Appointments",
    link: "/get-appointments",
  },
];

const Footer = () => {
  return (
    <section className="footer-container pt-5">
      <div className="row w-100">
        <div className="col-md-5 offset-md-1">
          <h2>About Photo Shoot Studios</h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            maxime accusantium doloremque earum inventore commodi animi in,
            facere eaque esse nihil voluptatem reprehenderit tenetur, officia,
            iste laudantium maiores non consectetur.
          </h5>
        </div>
        <div className="col-md-3">
          <h2>Site Links</h2>
          {footerData.map((footer) => (
            <FooterSite key={footer.id} footer={footer}></FooterSite>
          ))}
        </div>
        <div className="col-md-3">
          <h2>Our Site</h2>
          <div className="site-list" style={{ listStyle: "none" }}>
            <li>
              <a href="//www.google.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGoogle} /> Google
              </a>
            </li>
            <li>
              <a href="//www.facebook.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            <li>
              <a href="//www.instagram.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
