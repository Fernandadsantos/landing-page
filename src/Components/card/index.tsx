import React from "react";
import { CardParams } from "../../interfaces";
import "./style.css";
import ButtonModel from "../button";

export default function Card(props: CardParams) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-paragraph">{props.paragraph}</p>
        </div>
        <ButtonModel
          content={props.buttonContent}
          width="250px"
          height="45px"
        />
      </div>
      {props.children ?? <div></div>}
    </div>
  );
}
