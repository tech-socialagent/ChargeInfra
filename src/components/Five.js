import React, { useState } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Home from "./Home";
import Six from "./Six";
const Five = () => {
  const [responses, setResponses] = useState({});
  const [nextBtn, setNextBtn] = useState(false);
  const[exitBtn,setexitbtn]=useState(false)
  const exitBtnhandle=()=>{
    setexitbtn(true);
    document.getElementById("five").style = "display:none";

  }



  const handleNextBtn = () => {
    setNextBtn(true);
    document.getElementById("five").style = "display:none";
  };

  const handleResponseChange = (questionId, answerId) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: answerId,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation - check that the user has answered all questions
    const isFormValid = Data.quize_data.question5.every(
      (question) => responses[question.id]
    );

    if (isFormValid) {
      // Submit the responses via email or another method
      console.log(responses);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };
  return (
    <>
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
            <button onClick={exitBtnhandle}>{Data.quize_data.question_header.question_exit_btn}</button>
            {exitBtn ? <Home/> : ""}
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
          <form onSubmit={handleSubmit}>
            {Data.quize_data.question5.map((question) => (
              <div key={question.id}>
                <h1 className="question_title">{question.prompt}</h1>
                {Data.quize_data.question.map((answer) => (
                  <div className="question_container" key={answer.id}>
                    {Data.quize_data.answer5.map((answer) => {
                      return (
                        <form className="question_card_main">
                          <input
                            type="checkbox"
                            checked={responses[question.id] === answer.id}
                            onChange={() =>
                              handleResponseChange(question.id, answer.id)
                            }
                          />
                          <div className="question_card_btn">
                            <button className="quize_btn">{answer.btn}</button>
                          </div>
                        </form>
                      );
                    })}
                  </div>
                ))}
                <div className="btns" id="five_que_btn">
                  <button>Prev</button>
                  <button onClick={handleNextBtn}>Next</button>
                </div>
              </div>
            ))}
          </form>
        </div>
      </section>
      {nextBtn ? <Six /> : ""}
    </>
  );
};
export default Five;