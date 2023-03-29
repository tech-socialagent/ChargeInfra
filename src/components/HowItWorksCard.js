import React from "react";
import Data from "../Data.json";
import "../stylesheets/HowItWorksCard.css";

function HowItWorksCard() {
  return (
    <section className="how_it_workscard_main">
      {Data.how_it_works.how_it_works_card.map((item) => {
        return (
          <div className="how_it_works_card">
            <img
              src={require("../assets/work/" + item.how_it_works_pic)}
              alt=""
              className="work_card_img"
            />
            <p>{item.how_it_works_name}</p>
            <b>{item.how_it_works_bold_text}</b>
          </div>
        );
      })}
    </section>
  );
}

export default HowItWorksCard;
