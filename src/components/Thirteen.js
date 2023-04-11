import React, { useState } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Home from "./Home";
import Thanks from "./Thanks";
import Twelve from "./Twelve";
import { useNavigate } from "react-router-dom";
const Thirteen = () => {

  const [nextBtn, setNextBtn] = useState(false);
  const [prev, setPrev] = useState(false)
  const navigate = useNavigate()

  const prevBtnhandle = () => {
    setPrev(true);
  }

  const handleNextBtn = () => {
    setNextBtn(true);
  };

  const ThirteenCont = () => {
    return (
      <section className="question_main" id="thirteen">
        <div className="question_header">
          <div className="question_logo">
            <img
              src={require("../assets/landing_page_asset/" + Data.navbar.logo)}
              alt="logo"
              className="logo"
            />
          </div>
          <div className="question_number">
            <h1>
              {Data.quize_data.question_header13.question_number}
              <span className="unactive_number">/13</span>
            </h1>
          </div>
          <div className="question_exit_btn">
            <button >{Data.quize_data.question_header.question_exit_btn}</button>
          </div>
        </div>
        <div className="question_background">
          <img
            src={require("../assets/questions/" +
              Data.quize_data.question_background13.img)}
            alt=""
          />
        </div>
        <div className="question_screen">
          <div  className="question_main">
            {Data.quize_data.question13.map((question) => (
              <div key={question.id}>
                <h1 className="question_title">{question.prompt}</h1>
                {Data.quize_data.question.map((answer) => (
                  <div className="question_container" key={answer.id}>
                    <div className="question_card_main">
                      <textarea
                        className="textarea"
                      />

                    </div>
                  </div>
                ))}
                <div className="btns">
                <button onClick={prevBtnhandle} >Prev</button>
                    <button onClick={handleNextBtn} className="next_btn">Next</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <>

      {nextBtn ? <Thanks /> : ""}
      {prev ? <Twelve /> : nextBtn ? '' : <ThirteenCont />}
    </>
  );
};
export default Thirteen;