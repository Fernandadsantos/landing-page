import React from "react";
import { TeamCardParams } from "../../interfaces";
import "./style.css";
import CardModel from "../cardModel";
import Divider from "../divider";
import linkedin from "../../assets/linkedin.png";

export default function TeamCard(props: TeamCardParams) {
  return (
    <CardModel height="330px" width="450px">
      <div className="team-card-container">
        <div className="team-member-area">
          <div className="team-member-data">
            <div className="member">
              <img src={props.img} alt="membro da equipe" className="photo" />
            </div>
            <div className="team-member-infos">
              <h3>{props.name}</h3>
              <p>{props.function}</p>
            </div>
          </div>
          <img src={linkedin} alt="" className="linkedin" />
        </div>
        <Divider width={"100%"} height={"0"} color={"#9e9e9e"} />
        <p className="team-member-description">{props.description}</p>
      </div>
    </CardModel>
  );
}
