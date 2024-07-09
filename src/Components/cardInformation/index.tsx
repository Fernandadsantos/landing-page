import React from "react";
import icon from "../../assets/link-Icon.svg";
import "./style.css";

export default function CardInformation() {
  return (
    <div className="CardInformation">
      <div>
        <a href="/card-information">
          <span>Learn more</span>
          <img src={icon} alt="arrow icon" />
        </a>
      </div>
    </div>
  );
}
