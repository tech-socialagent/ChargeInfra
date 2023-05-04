import React, { useState, useContext, useEffect } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Home from "./Home";
import Twelve from "./Twelve";
import Ten from "./Ten";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../Context";


const Eleven = () => {

  const [nextBtn, setNextBtn] = useState(false);
  const [prev, setPrev] = useState(false)
  const navigate = useNavigate()

  const { Q11, setQ11 } = useContext(QuizContext);

  const prevBtnhandle = () => {
    setPrev(true);
  }

  const handleNextBtn = () => {
    if (Q11.one != '') {
      setNextBtn(true);
    }
    else {
      alert("Select One Option")
    }
  };

  const handleQ11 = (answer) => {
    console.log("entere");
    if (Q11.one == "") {
      setQ11(Q11 => ({
        ...Q11, one: answer
      }))
    }
    else if (Q11.two == "") {
      setQ11(Q11 => ({
        ...Q11, two: answer
      }))
    }
    else if(Q11.three == "") {
      setQ11(Q11 => ({
        ...Q11, three: answer
      }))
    }
    if(Q11.one == answer) {
      setQ11(Q11 => ({
        ...Q11, one: ""
      }))
    }
    if(Q11.two == answer) {
      setQ11(Q11 => ({
        ...Q11, two: ""
      }))
    }
    if(Q11.three == answer) {
      setQ11(Q11 => ({
        ...Q11, three: ""
      }))
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              11
              <span className="unactive_number">/13</span>
            </h1>
          </div>
          <div className="question_exit_btn">
          <button onClick={() => navigate('/')}>{Data.quize_data.question_header.question_exit_btn}</button>

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
        <div className="question_number_mobile">
            <h1>
              {Data.quize_data.question_header11.question_number}
              <span className="unactive_number">/13</span>
            </h1>
          </div>
          <div className="question_main">
            {Data.quize_data.question11.map((question) => (
              <div key={question.id}>
                <h1 className="question_title">{question.prompt}</h1>
                {Data.quize_data.question.map((answer) => (
                  <div className="question_container" key={answer.id}>
                    {Data.quize_data.answer11.map((answer) => {
                      return (
                        <div className="question_card_main"  >
                          <div onClick={() => handleQ11(answer.name)} className={Q11.one == answer.name || Q11.two == answer.name || Q11.three == answer.name ? "question_card_selected" : "question_card"}>
                            <img
                              src={require("../assets/questions/" + answer.img)}
                              alt=""
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
