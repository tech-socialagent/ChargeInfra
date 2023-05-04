import React, { useState, useContext, useEffect } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Eleven from "./Eleven";
import Nine from "./Nine";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../Context";

const Ten = () => {

  const [nextBtn, setNextBtn] = useState(false);
  const [prev, setPrev] = useState(false)
  const navigate = useNavigate()

  const { Q10, setQ10 } = useContext(QuizContext);

  const prevBtnhandle = () => {
    setPrev(true);
  }

  const handleNextBtn = () => {
    if (Q10.one != '') {
      setNextBtn(true);
    }
    else {
      alert("Select One Option")
    }
  };

  const handleQ10 = (answer) => {
    console.log("entere", Q10);
    if (Q10.one == "") {
      setQ10(Q10 => ({
        ...Q10, one: answer
      }))
    }
    else if (Q10.two == "") {
      setQ10(Q10 => ({
        ...Q10, two: answer
      }))
    }
    else if(Q10.three == "") {
      setQ10(Q10 => ({
        ...Q10, three: answer
      }))
    }
    if(Q10.one == answer) {
      setQ10(Q10 => ({
        ...Q10, one: ""
      }))
    }
    if(Q10.two == answer) {
      setQ10(Q10 => ({
        ...Q10, two: ""
      }))
    }
    if(Q10.three == answer) {
      setQ10(Q10 => ({
        ...Q10, three: ""
      }))
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const TenCont = () => {
    return (
      <section className="question_main" id='ten'>
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
              {Data.quize_data.question_header10.question_number}
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
              Data.quize_data.question_background10.img)}
            alt=""
          />
        </div>
        <div className="question_screen">
        <div className="question_number_mobile">
            <h1>
              {Data.quize_data.question_header10.question_number}
              <span className="unactive_number">/13</span>
            </h1>
          </div>
          <form className="question_main">
            {Data.quize_data.question10.map((question) => (
              <div key={question.id}>
                <h1 className="question_title">{question.prompt}</h1>
                {Data.quize_data.question.map((answer) => (
                  <div className="question_container" key={answer.id}>
                    {Data.quize_data.answer10.map((answer) => {
                      return (
                        <div className="question_card_main"  >
                          <div onClick={() => handleQ10(answer.name)} className={Q10.one == answer.name || Q10.two == answer.name || Q10.three == answer.name ? "question_card_selected" : "question_card"}>
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
                <div className="btns">
                  <button onClick={prevBtnhandle} >Prev</button>
                  <button onClick={handleNextBtn} className="next_btn">Next</button>
                </div>

              </div>
            ))}
          </form>
        </div>
      </section>
    )
  }
  return (
    <>

      {nextBtn ? <Eleven /> : ""}
      {prev ? <Nine /> : nextBtn ? '' : <TenCont />}
    </>
  );
};
export default Ten;
