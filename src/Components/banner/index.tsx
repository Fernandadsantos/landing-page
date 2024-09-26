import React from "react";
import { CardParams } from "../../interfaces";
import "./style.css";
import RedirectCard from "../redirectCard";

export default function Banner(props: CardParams) {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="card-text">
          <p className="card-paragraph">{props.paragraph}</p>
        </div>
        <div></div>
      </div>
      {props.children ?? <div></div>}
    </div>
  );
}
