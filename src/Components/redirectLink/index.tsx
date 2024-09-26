import React from "react";
import icon from "../../assets/link-Icon.svg";
import "./style.css";

export interface Redirect {
  path: string;
  color: string;
}

export default function RedirectLink(props: Redirect) {
  return (
    <div className="redirect">
      <a
        href={props.path}
        className="redirection-content"
        style={{
          color: ` ${props.color}`,
        }}
      >
        <span>Learn more</span>
        <img src={icon} alt="Redirect icon" width={35} />
      </a>
    </div>
  );
}
