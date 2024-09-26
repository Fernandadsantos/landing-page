import React from "react";
import { RedirectCardParams } from "../../interfaces";
import icon from "../../assets/link-Icon.svg";
import "./style.css";

export default function RedirectCard(props: RedirectCardParams) {
  return (
    <div className={`redirect-card  ${props.theme}`}>
      <div className="redirect-card-content">
        <div className="redirect-card-text">
          <h2 className="redirect-card-title titleTop" color="#fff">
            {props.titleTop}
          </h2>
          <h2 className="redirect-card-title titleBottom">
            {props.titleBottom}
          </h2>
        </div>
        <a href={props.link} className="redirection-card-link">
          <img src={icon} alt="Redirect icon" width={35} />
          <span>Learn more</span>
        </a>
      </div>
      {props.children ?? <div></div>}
    </div>
  );
}
