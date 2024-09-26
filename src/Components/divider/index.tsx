import React from "react";
import "./style.css";

interface DividerParams {
  width: string;
  height: string;
  color: string;
}

export default function Divider(props: DividerParams) {
  return (
    <div
      className="divider"
      style={{
        border: `1px solid ${props.color}`,
        width: ` ${props.width} `,
        height: ` ${props.height} `,
        alignSelf: "center",
      }}
    ></div>
  );
}
