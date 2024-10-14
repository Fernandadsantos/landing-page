import React from "react";
import logo from "../../assets/logo.svg";
import "./style.css";
import ButtonModel from "../button";

export default function Header() {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <div className="header-navBar">
        <ul className="header-nav-items-list">
          <li>
            <a href="#aboutUs">About us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#useCases">Use Cases</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <ButtonModel
          content={"Request a quote"}
          backgroundColor="#fff"
          color="#191a23"
          className="header-btn"
        />
      </div>
    </div>
  );
}
