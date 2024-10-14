import React from "react";
import playStore from "../../assets/google-play.png";
import "./style.css";

export default function MobilePage() {
  return (
    <div className="mobilePage">
      <h1>Acesse pelo nosso app</h1>
      <img src={playStore} alt="playstore" width={250} />
    </div>
  );
}
