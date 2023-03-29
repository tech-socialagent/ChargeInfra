import React, { useState,useRef} from "react";
import Data from "../Data.json";
import "../stylesheets/First.css";
import Three from "./Three";
import emailjs from "@emailjs/browser";
import Home from "./Home";

const Second = () => {
  const form = useRef();
  const [responses, setResponses] = useState({});
  const [nextBtn, setNextBtn] = useState(false);
  const[exitBtn,setexitbtn]=useState(false)
  const exitBtnhandle=()=>{
    setexitbtn(true);
    document.getElementById("second").style = "display:none";

  }

  const handleNextBtn = () => {
    setNextBtn(true);
    document.getElementById("second").style = "display:none";
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
    const isFormValid = Data.quize_data.question2.every(
      (question) => responses[question.id]
    );

    if (isFormValid) {
      // Submit the responses via email or another method
      console.log(responses);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7t5ydc9",
        "template_fyqqoa5",
        form.current,
        "UztH7dCRKtaFVpEnI"
      )
      .then(
        (result) => {
          // show the user a success message
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          // show the user an error
          console.log(error.text);
          console.log("inside error");
        }
      );

  }

  return (
    <>
      <section className="question_main" id="second">
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
              {Data.quize_data.question_header2.question_number}
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
              Data.quize_data.question_background2.img)}
            alt=""
          />
        </div>
        <div className="question_screen">
          <form onSubmit={handleSubmit} className="question_main">
            {Data.quize_data.question2.map((question) => (
              <div key={question.id}>
                <h1 className="question_title">{question.prompt}</h1>
                {Data.quize_data.question.map((answer) => (
                  <div className="question_container" key={answer.id}>
                    {Data.quize_data.answer2.map((answer) => {
                      return (
                        <form className="question_card_main" onSubmit={sendEmail}>
                          <input
                            type="checkbox"
                            checked={responses[question.id] === answer.id}
                            onChange={() =>
                              handleResponseChange(question.id, answer.id)
                            }
                          />
                          <div className="question_card">
                            <img
                              src={require("../assets/questions/" + answer.img)}
                              alt=""
                              type="checkbox"
                            />
                            <p>{answer.name}</p>
                          </div>
                        </form>
                      );
                    })}
                  </div>
                ))}
                <div className="btns" id="second_que_btn">
                  <button>Prev</button>
                  <button onClick={handleNextBtn}>Next</button>
                </div>
              </div>
            ))}
          </form>
        </div>
      </section>
      {nextBtn ? <Three /> : ""}
    </>
  );
};
export default Second;