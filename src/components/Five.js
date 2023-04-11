import React, { useState } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Home from "./Home";
import Six from "./Six";
import Forth from "./Forth";
import { useNavigate } from "react-router-dom";
const Five = () => {


  const [nextBtn, setNextBtn] = useState(false);
  const [prev, setPrev] = useState(false)
  const navigate = useNavigate()

  const prevBtnhandle = () => {
    setPrev(true);
  }

  const handleNextBtn = () => {
    setNextBtn(true);
  };

  const FiveCont = () => {
    return (
      <section className="question_main" id="five">
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
              {Data.quize_data.question_header5.question_number}
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
              Data.quize_data.question_background5.img)}
            alt=""
          />
        </div>
        <div className="question_screen">
          <div >
            {Data.quize_data.question5.map((question) => (
              <div key={question.id}>
                <h1 className="question_title">{question.prompt}</h1>
                {Data.quize_data.question.map((answer) => (
                  <div className="question_container" key={answer.id}>
                    {Data.quize_data.answer5.map((answer) => {
                      return (
                        <div className="question_card_main">
                          <input
                            type="checkbox"
                          />
                          <div className="question_card_btn">
                            <button className="quize_btn">{answer.btn}</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
                <div className="btns" id="five_que_btn">
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

      {nextBtn ? <Six /> : ""}
      {prev ? <Forth /> : nextBtn ? '' : <FiveCont />}
    </>
  );
};
export default Five;
