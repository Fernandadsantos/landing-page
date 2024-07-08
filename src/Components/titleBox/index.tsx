import React from "react";
import "./style.css";
import { TitleBoxParams } from "../../interfaces";

export default function TitleBox(props: TitleBoxParams) {
  return (
    <div className="titleBox">
      <h1 className="title">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>
    </div>
  );
}
