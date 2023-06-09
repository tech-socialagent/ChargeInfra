import React, { useState, useContext, useEffect } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Five from "./Five";
import Home from "./Home";
import Three from "./Three";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../Context";

const Forth = () => {

  const [nextBtn, setNextBtn] = useState(false);
  const [prev, setPrev] = useState(false)
  const navigate = useNavigate()

  const { Q4, setQ4 } = useContext(QuizContext);

  const prevBtnhandle = () => {
    setPrev(true);
  }

  const handleNextBtn = () => {
    if (Q4 != '') {
      setNextBtn(true);
    }
    else {
      alert("Select One Option")
    }
  };

  const handleSelection = (answer) => {
    // setSelect(!select);
    setQ4(answer);
    console.log("Q4", Q4)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const ForthCont = () => {
    return (
      <section className="question_main" id="forth">
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
              {Data.quize_data.question_header4.question_number}
              <span className="unactive_number">/13</span>
            </h1>
          </div>
          <div className="question_exit_btn">
            <button onClick={() => navigate('/')} >{Data.quize_data.question_header.question_exit_btn}</button>
          </div>
        </div>
        <div className="question_background">
          <img
            src={require("../assets/questions/" +
              Data.quize_data.question_background4.img)}
            alt=""
          />
        </div>
        <div className="question_screen">
        <div className="question_number_mobile">
            <h1>
              {Data.quize_data.question_header4.question_number}
              <span className="unactive_number">/13</span>
            </h1>
          </div>
          <div className="question_main">
            {Data.quize_data.question4.map((question) => (
              <div key={question.id}>
                <h1 className="question_title">{question.prompt}</h1>
                {Data.quize_data.question.map((answer) => (
                  <div className="question_container" key={answer.id}>
                    {Data.quize_data.answer4.map((answer) => {
                      return (
                        <div className="question_card_main"  >
                          <div onClick={() => handleSelection(answer.name)} className={Q4 == answer.name ? "question_card_selected" : "question_card"}>
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
                <div className="btns" id="forth_que_btn">
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

      {nextBtn ? <Five /> : ""}
      {prev ? <Three /> : nextBtn ? '' : <ForthCont />}
    </>
  );
};
export default Forth;
