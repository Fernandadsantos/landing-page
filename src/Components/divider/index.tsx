import React from "react";
import "./style.css";

interface DividerParams {
  rotate: boolean;
  color: string;
}

export default function Divider(props: DividerParams) {
  return (
    <div
      className={`${props.rotate ? "rotate" : ""} divider`}
      style={{
        border: `1px solid ${props.color}`,
        alignSelf: "center",
      }}
    ></div>
  );
}
