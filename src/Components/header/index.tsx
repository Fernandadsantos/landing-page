import React from "react";
import logo from "../../assets/logo.svg";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="header-navBar">
        <ul className="header-nav-items-list">
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
        <button className="header-btn">Request a quote</button>
      </div>
    </div>
  );
}
