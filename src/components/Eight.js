import React, { useState } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Home from "./Home";
import Nine from "./Nine";
const Eight = () => {
  const [responses, setResponses] = useState({});
  const [nextBtn,setNextBtn]=useState(false);
  const[exitBtn,setexitbtn]=useState(false)
  const exitBtnhandle=()=>{
    setexitbtn(true);
    document.getElementById("eight").style = "display:none";

  }


  const handleNextBtn=()=>{
    setNextBtn(true);
    document.getElementById('eight').style='display:none';
  }

  const handleResponseChange = (questionId, answerId) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: answerId,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation - check that the user has answered all questions
    const isFormValid = Data.quize_data.question8.every(
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
    <section className="question_main" id="eight">
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
            {Data.quize_data.question_header8.question_number}
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
            Data.quize_data.question_background8.img)}
          alt=""
        />
      </div>
      <div className="question_screen">
        <form onSubmit={handleSubmit} className="question_main">
          {Data.quize_data.question6.map((question) => (
            <div  key={question.id}>
              <h1 className="question_title">{question.prompt}</h1>
              {Data.quize_data.question8.map((answer) => (
                <div className="question_container" key={answer.id}>
                    {Data.quize_data.answer8.map((answer)=>{
                    return (
                      <form className="question_card_main">
                        <input
                          type="checkbox"
                          checked={responses[question.id] === answer.id}
                          onChange={() =>
                            handleResponseChange(question.id, answer.id)
                          }
                        />
                        <div  className="question_card">
                        {/* <img
                          src={require("../assets/questions/" + answer.img)}
                          alt=""
                          type="checkbox"
                        />
                        <p>{answer.name}</p> */}
                        <button className="quize_btn">{answer.btn}</button>
                        </div>
                      </form>
                      
                    );
                  })}

                </div>
              ))}
              <div className="btns">
                          <button>Prev</button>
                          <button onClick={handleNextBtn}>Next</button>
                        </div>

            </div>
          ))}
        </form>
      </div>
    </section>
    {nextBtn ? <Nine/> : ""}
    </>
  );
};
export default Eight;