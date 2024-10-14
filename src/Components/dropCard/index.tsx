import React, { useState } from "react";
import "./style.css";
import CardModel from "../cardModel";
import { DropCardParams } from "../../interfaces";
import Divider from "../divider";

export default function DropCard(props: DropCardParams) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropCard-container">
      <CardModel
        className={`dropCard-card ${
          isOpen ? "dropCard-card-toggle" : "dropCard-card"
        }`}
      >
        <div className="dropCard-content">
          <div className="dropCard-title-area">
            <div className="dropCard-title">
              <h1>{props.numberTitle}</h1>
              <h2>{props.title}</h2>
            </div>
            <button className="drop-btn" onClick={toggleDropDown}>
              <div
                className={`drop-btn-symbol ${isOpen ? "" : "vertical"}`}
                id="drop-btn-symbol-vertical"
              ></div>
              <div className="horizontal" id="drop-btn-symbol-horizontal"></div>
            </button>
          </div>
          <div className={`toggle-label ${isOpen ? "show" : ""}`}>
            <Divider rotate={false} color={"#9e9e9e"} />
            <p>{props.content}</p>
          </div>
        </div>
      </CardModel>
    </div>
  );
}
