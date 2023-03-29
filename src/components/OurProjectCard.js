import React from "react";
import Data from "../Data.json";
import '../stylesheets/OurProjectCard.css';
function OurProjectCard() {
  return (
    <section className="ourProject_card_main">
      {Data.our_project.our_project_card.map((item) => {
        return (
          <section>
          <div className="ourProject_card">
            <img
              src={require("../assets/our_projects/" + item.project_img)}
              alt=""
              className="ouProject_card_img"
            />
            <p className="ouProject_card_name">{item.project_name}</p>
            <button className="ourProject_card_btn">→</button>

          </div>
          <div className="ourProject_card_hover">
            <h1 className="card_hover_name">{item.name}</h1>
            <p className="ourProject_card_hover_desc">{item.desc}</p>
            <button className="ourProject_card_hover_btn">See Details</button>
          </div>
          </section>
        );
      })}
    </section>
  );
}

export default OurProjectCard;

