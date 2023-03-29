import React from "react";
import "../stylesheets/Construction.css";
import Data from "../Data.json";

function Construction() {
  return (
    <section className="construction_main">
      <h1 className="residental_construction_heading">
        {Data.residental_construction.heading}
      </h1>
      <section className="construction_detail">
        <div className="construction_left">
          <img
            src={require("../assets/construction/" +
              Data.residental_construction.construction_pic)}
            alt=""
            className="residental_construction_img"
          />
        </div>
        <div className="construction_right">
          <p className="residental_construction_title">
            {Data.residental_construction.construction_title}
          </p>
          <p className="residental_construction_desc">{Data.residental_construction.construction_desc}</p>
          <ul className="residental_construction_list">
            {Data.residental_construction.construction_desc_list.map((item) => {
              return <li>{item.list_item}</li>;
            })}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Construction;
