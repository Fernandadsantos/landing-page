import React from "react";
import { BlockQuote } from "../../interfaces";
import box from "../../assets/Bubble.png";
import "./style.css";

export default function BlockQuoteModel(props: BlockQuote) {
  return (
    <div className="blockQuote-container">
      <div className="blockQuote-content">
        <div>
          <img src={box} alt="box" width={700} />
          <blockquote>"{props.quote}"</blockquote>
        </div>
      </div>
      <div className="blockQuote-details">
        <p className="blockQuote-author">{props.name}</p>
        <p className="blockQuote-title">{props.title}</p>
      </div>
    </div>
  );
}
