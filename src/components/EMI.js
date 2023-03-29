import React from "react";
import "../stylesheets/EMI.css";
import Data from "../Data.json";
import BookNowForm from '../components/BookNowForm';
import { useState } from "react";

function EMI() {
  const[popUpbtn, setpopUpbtn]=useState(false);
  const [trigger, setTrigger]=useState();
  return (
    <section className="EMI_back">
    <section className="EMI_main">
      <h1 className="EMI_heading">{Data.EMI.EMI_heading}</h1>
      <section className="EMI_detail">
        <div className="EMI_left">
          <div className="EMI_left_img_main">
            <img
              src={require("../assets/EMI/" + Data.EMI.EMI_pic)}
              alt=""
              className="EMI_img"
            />
          </div>
          <div className="EMI_left_text_main">
            <h1>Design Now, Pay later</h1>
            <p className="EMI_left_dec">
              Putting off your home interiors project because of financial
              constraints? You don't have to anymore. The{" "}
              <span className="EMI_yellow_text">No Cost EMI</span> facility
              helps you to pay your monthly EMIs without any additional cost.
              This means, when repaying your purchase cost, you only have to pay
              the actual cost of the product without any interest.
            </p>
            <p className="EMI_left_dec">
              Tenure: 6-24 months. <span className="EMI_yellow_text">No cost EMI options.</span>
            </p>
            <p className="EMI_term_condition">T&Cs apply</p>
          </div>
        </div>
        <div className="EMI_right">
          <p className="EMI_title">
            Want to book a <br/><span id="free_text"> FREE</span> Consultation
            session?
          </p>
          <button className="book_now_btn" onClick={()=>{setpopUpbtn(true)}}>Book now</button>
          <BookNowForm trigger={popUpbtn}  setTrigger={setpopUpbtn}/>
        </div>
      </section>
    </section>
    </section>
  );
}

export default EMI;
