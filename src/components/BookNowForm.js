import React from 'react';
import '../stylesheets/BookNowForm.css';
import Data from '../Data.json';
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

function BookNowForm(props) {
  const form = useRef();

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

  return (props.trigger) ? (
    <div className='BookNow-pop-up-main'>
        <div className='BookNow-pop-up-heading'>
            <h1>Book Free Consultation</h1>
            <button className="pop-up-cancel" onClick={()=>{props.setTrigger(false)}}>X</button>
        </div>
        <hr/>
        <form className='pop-up-form' ref={form} onSubmit={sendEmail}>

            <input type="text" placeholder='Name' name="user_name" required/>
            <input type="email" placeholder='Email ID' name="user_email" required/>
            <input type="text" placeholder='Property Name' name="user_property" required/>
       <button className='BookNow_broucher_btn'  type='submit'>Book Now</button>
        </form>
        <div>
            <p className='pop-up-privacy-policy'>By submitting this form, you agree to the <span className='EMI_yellow_text'>Privacy Policy </span> & <span className='EMI_yellow_text'>Terms and Conditions</span></p>
        </div>
    </div>
  ) : "";
}

export default BookNowForm;
