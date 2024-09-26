import React from "react";
import { CardModalParams } from "../../interfaces";
import "./style.css";

export default function CardModel(props: CardModalParams) {
  return (
    <div
      className={` ${props.className ? props.className : "CardModel"}`}
      id={props.id}
      style={{
        backgroundColor: ` ${props.backgroundColor}`,
        color: ` ${props.color}`,
        width: ` ${props.width}`,
        height: ` ${props.height}`,
        borderRadius: ` ${props.radius}`,
      }}
    >
      {props.children ?? <div></div>}
    </div>
  );
}
