import React from "react";
import Data from "../Data.json";
import "../stylesheets/Showinginterest.css";
import '../stylesheets/Thanks_you.css';
import { useState } from "react";
import Home from "./Home";
function Thanks() {
  const[exitBtn,setexitbtn]=useState(false)
  const exitBtnhandle=()=>{
    setexitbtn(true);
    document.getElementById("showing_interest").style = "display:none";

  }

  return (
    <>
      <div id="showing_interest">
        <section id="showing_interest_main">
          <div className="showing_interest_text_main">
            <div className="showing_interest_up">
              <img
                src={require("../assets/thank_you/" +
                  Data.thank_you.thank_you_img)}
                alt=""
              />
            </div>
            <div className="showing_interest_down">
              <p className="showing_interest_desc">
                {Data.thank_you.thank_you_desc}
              </p>
              <div className="btns" id="showing_intrest_btn">
                <button className="next_btn" onClick={exitBtnhandle}>
                {exitBtn ? <Home/> : ""}
                  {Data.thank_you.thank_you_btn}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Thanks;
