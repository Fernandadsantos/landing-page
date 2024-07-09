import React from "react";
import { CardParams } from "../../interfaces";
import "./style.css";

export default function Card(props: CardParams) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-paragraph">{props.paragraph}</p>
        </div>
        <button className="card-btn">{props.buttonContent}</button>
      </div>
      {props.children ?? <div></div>}
    </div>
  );
}
