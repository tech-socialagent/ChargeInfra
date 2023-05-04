import React from "react";
import "../stylesheets/About.css";
import Data from "../Data.json";
import { useState, useContext } from "react";
import { BookingContext } from "../Context";
function About() {
  const { booking, setBooking } = useContext(BookingContext);
  return (
    <section id="about_section" className="about-main">
      <div className="about-left">
        <img
          src={require("../assets/About_us_Section_Asset/" +
            Data.about_section.about_img)}
          alt=""
          className="about_img"
        />
      </div>
      <div className="about-right">
        <div className="about-right-heading">
          <h1 className="about_us_heading">
            {Data.about_section.about_us_heading}
          </h1>
          <span className="animinated-line"></span>
        </div>
        <p className="about_us_title">{Data.about_section.about_us_title}</p>
        <p className="about_us_desc">{Data.about_section.about_us_desc}</p>
        <button className="book_appointment_btn" onClick={()=> setBooking(true)}>
          {Data.about_section.book_appointment_text}
        </button>
        
      </div>
    </section>
  );
}

export default About;
