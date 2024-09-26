import React from "react";
import logo from "../../assets/logoStar.svg";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import "./style.css";
import Divider from "../divider";
import CardModel from "../cardModel";
import ButtonModel from "../button";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="/" className="footer-logo">
          <img src={logo} alt="footer-logo" />
        </a>
        <div className="footer-navBar">
          <ul className="footer-nav-items-list">
            <li>
              <a href="/AboutUs">About us</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="/UseCases">Use Cases</a>
            </li>
            <li>
              <a href="/Pricing">Pricing</a>
            </li>
            <li>
              <a href="/Blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="social ">
          <a href="">
            <img className="social-icons" src={linkedin} alt="" />
          </a>
          <a href="">
            <img className="social-icons" src={facebook} alt="" />
          </a>
          <a href="">
            <img className="social-icons" src={insta} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-contact">
        <div className="contact-content">
          <div className="footer-title-contact">
            <p>Contact us:</p>
          </div>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <CardModel
          color={"#fff"}
          backgroundColor={"#292A32"}
          width={"634px"}
          height={"184px"}
          radius="10px"
        >
          <div className="footer-content-card">
            <input className="footer-input" type="Email" placeholder="Email" />
            <ButtonModel
              content="Subscribe to news"
              backgroundColor="#B9FF66"
              color="#191A23"
              width="200px"
            />
          </div>
        </CardModel>
      </div>
      <Divider width={"89%"} height={"0"} color={"#9e9e9e"} />
      <div className="footer-credits">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="">Privacy Policy</a>
      </div>
    </div>
  );
}
