import React from "react";
import Data from "../Data.json";
import "../stylesheets/Showinginterest.css";
import { useState } from "react";
import First from "./First";
function ShowingInterest() {
  const [nextBtn, setNextBtn] = useState(false);
  const handleNextBtn = () => {
    setNextBtn(true);
    console.log("first question clicked");
    document.getElementById("showing_interest").style = "display:none";
  };

  return (
    <>
      <div id="showing_interest">
        <section id="showing_interest_main">
          <div className="showing_interest_text_main">
            <div className="showing_interest_up">
              <img
                src={require("../assets/showing interest/" +
                  Data.showing_interest.hello_img)}
                alt=""
              />
            </div>
            <div className="showing_interest_down">
              <p className="showing_interest_heading">
                {Data.showing_interest.hello_heading}
              </p>
              <p className="showing_interest_desc">
                {Data.showing_interest.hello_desc}
              </p>
              <div className="btns" id="showing_intrest_btn">
              <button onClick={handleNextBtn} className="next_btn">{Data.showing_interest.hello_btn}</button>
            </div>
            </div>
          </div>

        </section>
        {/* <div className="btns" id="showing_intrest_btn">
                  <button  className="next_btn">
                    Next
                  </button>
                </div> */}


      </div>
      {nextBtn ? <First /> : ""}

    </>
  );
}

export default ShowingInterest;
