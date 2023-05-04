import React, { useState, useContext, useEffect } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Thanks from "./Thanks";
import Twelve from "./Twelve";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../Context";


const Thirteen = () => {

  const [nextBtn, setNextBtn] = useState(false);
  const [prev, setPrev] = useState(false)
  const navigate = useNavigate()
  const [selection, setSelection] = useState({
    one: "",
    two: "",
    three: "",
  })

  const { Q13, setQ13 } = useContext(QuizContext);

  const prevBtnhandle = () => {
    setPrev(true);
  }

  const handleNextBtn = () => {
    if (Q13 != '') {
      setNextBtn(true);
    }
    else {
      alert("Please write a message")
    }
  };

  const handleSelection = (answer) => {
    // setSelect(!select);
    setQ13(answer);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      {nextBtn ? <Thanks /> : ""}
      {prev ? <Twelve /> : nextBtn ? '' :

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
            <button onClick={() => navigate('/')}>{Data.quize_data.question_header.question_exit_btn}</button>
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
          <div className="question_number_mobile">
            <h1>
              {Data.quize_data.question_header13.question_number}
              <span className="unactive_number">/13</span>
            </h1>
          </div>
            <div className="question_main">
              {Data.quize_data.question13.map((question) => (
                <div key={question.id}>
                  <h1 className="question_title">{question.prompt}</h1>
                  {Data.quize_data.question.map((answer) => (
                    <div className="question_container" key={answer.id}>
                      <div className="question_card_main13">
                        <textarea
                          type="text"
                          autoFocus="autofocus"
                          className="textarea"
                          value={Q13}
                          onChange={(e) => { setQ13(e.target.value) }}
                          placeholder='Message'
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

      }
    </>
  );
};
export default Thirteen;