import React, { useState, useContext, useEffect } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Second from "./Second";
import { useNavigate } from "react-router-dom";
import ShowingInterest from "./ShowingInterest";
import { QuizContext } from "../Context";

const First = () => {

  const [nextBtn, setNextBtn] = useState(false);
  const [prev, setPrev] = useState(false)
  const navigate = useNavigate()

  // const [select, setSelect] = useState()

  const { Q1, setQ1 } = useContext(QuizContext);

  const prevBtnhandle = () => {
    setPrev(true);
  }

  const handleNextBtn = () => {
    if (Q1 != '') {
      setNextBtn(true);
    }
    else {
      alert("Select One Option")
    }
  };

  const handleSelection = (answer) => {
    // setSelect(!select);
    setQ1(answer);
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const FirstCont = () => {
    return (
      <>
        <section className="question_main" id="first_question">
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
                {Data.quize_data.question_header.question_number}
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
                Data.quize_data.question_background.img)}
              alt=""
            />
          </div>
          <div className="question_number_mobile">
            <h1>
              {Data.quize_data.question_header.question_number}
              <span className="unactive_number">/13</span>
            </h1>
          </div>
          {Data.quize_data.question.map((question) => (
            <h1 className="question_title">{question.prompt}</h1>
          ))}
          
          <div className="question_screen">
            <div className="question_main">
              {Data.quize_data.question.map((question) => (
                <div key={question.id}>
                  {Data.quize_data.question.map((answer) => (
                    <div className="question_container" key={answer.id}>
                      {Data.quize_data.answer.map((answer) => {
                        return (
                          <div className="question_card_main"  >
                            <div onClick={() => handleSelection(answer.name)} className={Q1 == answer.name ? "question_card_selected" : "question_card"}>
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
                  <div className="btns" id="first_que_btn">
                    <button onClick={prevBtnhandle} >Prev</button>
                    <button onClick={handleNextBtn} className="next_btn">Next</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }


  return (
    <>

      {nextBtn ? <Second /> : ''}
      {prev ? <ShowingInterest /> : nextBtn ? '' : <FirstCont />}
    </>
  );
};
export default First;
