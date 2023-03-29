import React, { useState } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Thanks from "./Thanks";
import ThankU from "./ThankU";
const Agree = () => {
  const [responses, setResponses] = useState({});
  const [nextBtn,setNextBtn]=useState(false)

  const handleNextBtn=()=>{
    setNextBtn(true);
    document.getElementById('agree').style='display:none';
  }

  return (
    <>
    <section className="question_main" id='agree'>
      <div className="question_header">
        <div className="question_logo">
          <img
            src={require("../assets/landing_page_asset/" + Data.navbar.logo)}
            alt="logo"
            className="logo"
          />
        </div>
        <div className="question_exit_btn">
          <button>{Data.quize_data.question_header.question_exit_btn}</button>
        </div>
      </div>
      <div className="question_background">
        <img
          src={require("../assets/questions/" +
            Data.quize_data.terms_condition.terms_condition_background.img)}
          alt=""
        />
      </div>
      <div className="question_screen" >
      <form>

                        <div  className="question_container" id="agree_container">
                        <p className="term_condition_text">{Data.quize_data.terms_condition.terms}</p>
                        <button className="quize_btn">{Data.quize_data.terms_condition.agree}</button>
                        <button className="quize_btn">{Data.quize_data.terms_condition.disagree}</button>

                        </div>
                        <div className="btns">
                          <button>Prev</button>
                          <button onClick={handleNextBtn}>Next</button>
                        </div>
    </form>
      </div>
    </section>
    {nextBtn ? <ThankU/> : ""}
    </>
  );
};
export default Agree;
