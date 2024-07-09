import React from "react";
import "./style.css";

interface DividerParams {
  position: string;
  color: string;
}

export default function Divider(props: DividerParams) {
  const div = document.querySelector(".divider");
  div?.classList.add(`${props.position}`);
  return (
    <div
      className="divider"
      style={{ border: `1px solid ${props.color}` }}
    ></div>
  );
}
