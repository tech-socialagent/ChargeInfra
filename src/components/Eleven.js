import React, { useState } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Home from "./Home";
import Twelve from "./Twelve";
import Ten from "./Ten";
import { useNavigate } from "react-router-dom";
const Eleven = () => {

  const [nextBtn, setNextBtn] = useState(false);
  const [prev, setPrev] = useState(false)
  const navigate = useNavigate()

  const prevBtnhandle = () => {
    setPrev(true);
  }

  const handleNextBtn = () => {
    setNextBtn(true);
  };

  const ElevenCont = () => {
    return (
      <section className="question_main" id="Eleven">
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
              {Data.quize_data.question_header11.question_number}
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
              Data.quize_data.question_background11.img)}
            alt=""
          />
        </div>
        <div className="question_screen">
          <div className="question_main">
            {Data.quize_data.question11.map((question) => (
              <div key={question.id}>
                <h1 className="question_title">{question.prompt}</h1>
                {Data.quize_data.question.map((answer) => (
                  <div className="question_container" key={answer.id}>
                    {Data.quize_data.answer11.map((answer) => {
                      return (
                        <div className="question_card_main">
                          <input
                            type="checkbox"
                          />
                          <div className="question_card">
                            <img
                              src={require("../assets/questions/" + answer.img)}
                              alt=""
                              type="checkbox"
                            />
                            <p>{answer.name}</p>
                          </div>
                        </div>

                      );
                    })}

                  </div>
                ))}
                <div className="btns" >
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
      {nextBtn ? <Twelve /> : ""}
      {prev ? <Ten /> : nextBtn ? '' : <ElevenCont />}
    </>
  );
};
export default Eleven;
