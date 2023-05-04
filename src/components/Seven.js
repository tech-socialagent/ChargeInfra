import React, { useState, useContext, useEffect } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Eight from "./Eight";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import Six from "./Six";
import { QuizContext } from "../Context";


const Seven = () => {

  const [nextBtn, setNextBtn] = useState(false);
  const [prev, setPrev] = useState(false)
  const navigate = useNavigate()

  const { Q7, setQ7 } = useContext(QuizContext);

  const prevBtnhandle = () => {
    setPrev(true);
  }

  const handleNextBtn = () => {
    if (Q7 != '') {
      setNextBtn(true);
    }
    else {
      alert("Select One Option")
    }
  };

  const handleSelection = (answer) => {
    // setSelect(!select);
    setQ7(answer);
    console.log("Q7", Q7)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const SevenCont = () => {
    return (
      <section className="question_main" id="seven">
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
              {Data.quize_data.question_header7.question_number}
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
              Data.quize_data.question_background7.img)}
            alt=""
          />
        </div>
        <div className="question_screen">
        <div className="question_number_mobile">
            <h1>
              {Data.quize_data.question_header7.question_number}
              <span className="unactive_number">/13</span>
            </h1>
          </div>
          <form className="question_main">
            {Data.quize_data.question7.map((question) => (
              <div key={question.id}>
                <h1 className="question_title">{question.prompt}</h1>
                {Data.quize_data.question7.map((answer) => (
                  <div className="question_container" key={answer.id}>
                    {Data.quize_data.answer7.map((answer) => {
                      return (
                        <div className="question_card_main">
                          <div className="question_card_btn">
                            <button onClick={() => handleSelection(answer.btn)} className={Q7 == answer.btn ? "question_card_selected_btn" : "quize_btn"}>{answer.btn}</button>
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

      {nextBtn ? <Eight /> : ""}
      {prev ? <Six /> : nextBtn ? '' : <SevenCont />}
    </>
  );
};
export default Seven;
