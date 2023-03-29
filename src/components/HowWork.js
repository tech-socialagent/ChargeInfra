import React from "react";
import "../stylesheets/HowWork.css";
import Data from "../Data.json";
import HowItWorksCard from "./HowItWorksCard";

function HowWork() {
  return (
    <section className="how_works_main">
      <h1>{Data.how_it_works.how_it_works_heading}</h1>
      <HowItWorksCard />
    </section>
  );
}

export default HowWork;
