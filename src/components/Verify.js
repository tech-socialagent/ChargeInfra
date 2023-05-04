import Data from "../Data.json";
import React from "react";
import "../stylesheets/verify.css";
function Verify() {
  return (
    <section className="verify_main" id="verify_otp">
      <div className="verify_text">
        <h1 className="verify_text_heading">{Data.verify.verify_heading}</h1>
        <p className="verify_text_desc">
          We enhance the appearance and overall ambiance of a living space{" "}
          <br /> by adding elements of style, design, and sophistication.
        </p>
        <p className="enter_mobile_number">{Data.verify.enter_number}</p>
        <input
          type="number"
          placeholder={Data.verify.enter_number}
          className="number_field"
          name="mobile"
        />
        <br />
        <button className="verify_btn" id="recaptcha-container">
          {Data.verify.send_otp_btn}
        </button>

        <p className="verify_text_sub_desc">{Data.verify.verify_sub_desc}</p>
        <input
          type="number"
          placeholder={Data.verify.verify_placeholder}
          className="number_field"
          name="otp"
        />
        <br />
        <button className="verify_btn" id="recaptcha-container">
          {Data.verify.verify_btn}
        </button>
        <p className="resend_otp">Resend OTP</p>
      </div>
    </section>
  );
}
export default Verify;
