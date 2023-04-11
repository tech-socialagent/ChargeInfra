import "../stylesheets/DownloadBroucher.css";
import Data from "../Data.json";
import React, { useState, useRef } from "react";
import Verify from "./Verify";
import First from "./First";
import emailjs from "@emailjs/browser";
import ShowingInterest from "./ShowingInterest";
import { useNavigate } from "react-router-dom";

function DownloadPopUp(props) {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    // prevents the page from reloading when you hit “Send”

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
  };

  function showVerifyPop() {
    setTriggerEvent(true);
    document.getElementById("download_form").style = "display:none";
    console.log("clicked");
  }
  const [triggerEvent, setTriggerEvent] = useState(false);
  return props.trigger ? (
    <>
      <section id="download_form">
        <div className="download-pop-up-main">
          <div className="pop-up-heading">
            <h1>Download</h1>
            <button
              className="pop-up-cancel"
              onClick={() => {
                props.setTrigger(false);
              }}
            >
              X
            </button>
          </div>
          <hr />
          <form className="pop-up-form" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name"  name="user_name"  required/>
            <input
              type="email"
              placeholder="Email ID"
              name="user_email"
              required
            />
            <input
              type="text"
              placeholder="Property Name"
              name="user_property"
              required

            />
            {/* <a
              href="https://drive.google.com/file/d/1CIez7EbbRf5Nva9OZ8YzONQb1eEET39Z/view?usp=sharing"
              className="download_broucher_btn"
              download
              onClick={sendEmail}
            >
              <button className="download_broucher_btn">
                <img
                  src={require("../assets/interior/" +
                    Data.home_interior.home_interior_left
                      .home_interior_btn_img)}
                  alt=""
                />
                <p>
                  {Data.home_interior.home_interior_left.home_interior_btn_text}
                </p>
              </button>
            </a> */}
            <form method="get" action="https://drive.google.com/file/d/1CIez7EbbRf5Nva9OZ8YzONQb1eEET39Z/view?usp=sharing" target="_blank">
            <button className="download_broucher_btn"> Download Now</button>
            </form>
            <button onClick={()=> navigate('/Quiz')} className="start_quize">
              Start Quize
            </button>
            <p className="pop-up-privacy-policy">
              By submitting this form, you agree to the{" "}
              <span className="EMI_yellow_text">Privacy Policy </span> &{" "}
              <span className="EMI_yellow_text">Terms and Conditions</span>
            </p>
          </form>
        </div>
      </section>
      {triggerEvent ? <ShowingInterest /> : ""}
    </>
  ) : (
    ""
  );
}

export default DownloadPopUp;
