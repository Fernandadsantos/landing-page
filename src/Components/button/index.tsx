import React from "react";
import { BtnProps } from "../../interfaces";
import "./style.css";

export default function ButtonModel(props: BtnProps) {
  return (
    <button
      className={` ${props.className ? props.className : "btn"} `}
      style={{
        backgroundColor: ` ${props.backgroundColor}`,
        color: ` ${props.color}`,
        width: ` ${props.width}`,
        height: ` ${props.height}`,
        borderRadius: ` ${props.radius}`,
      }}
    >
      {props.content}
    </button>
  );
}
