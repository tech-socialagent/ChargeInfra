import React from "react";
import "../stylesheets/Services.css";
import Data from "../Data.json";
import ServiceCard from "./ServiceCard";
function Services() {
  return (
    <section id="services_section" className="services_section_main">
      <div className="services_section_titles">
        <h1 className="services_heading">
          {Data.services_section.service_heading}
        </h1>
        <p className="services_desc">{Data.services_section.services_desc}</p>
      </div>
      <ServiceCard/>
    </section>
  );
}

export default Services;
