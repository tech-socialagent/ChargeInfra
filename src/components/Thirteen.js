import React, { useState } from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Home from "./Home";
import Thanks from "./Thanks";
const Thirteen = () => {
  const [responses, setResponses] = useState({});
  const [nextBtn,setNextBtn]=useState(false);
  const handleNextBtn=()=>{
    setNextBtn(true);
    document.getElementById('thirteen').style='display:none';
  }

  const handleResponseChange = () => {
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation - check that the user has answered all questions
  };
  return (
    <>
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
          <button >{Data.quize_data.question_header.question_exit_btn}</button>
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
        <form onSubmit={handleSubmit} className="question_main">
          {Data.quize_data.question13.map((question) => (
            <div  key={question.id}>
              <h1 className="question_title">{question.prompt}</h1>
              {Data.quize_data.question.map((answer) => (
                <div className="question_container" key={answer.id}>
                      <form className="question_card_main">
                        <textarea
                          checked={responses[question.id] === answer.id}
                          onChange={() =>
                            handleResponseChange(question.id, answer.id)
                          }
                        className="textarea"
                        />

                      </form>
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
    {nextBtn ?  <Thanks/> : ""}
    </>
  );
};
export default Thirteen;