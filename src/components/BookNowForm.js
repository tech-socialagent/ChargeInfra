import React, { useContext } from 'react';
import '../stylesheets/BookNowForm.css';
import { BookingContext } from "../Context";

function BookNowForm() {

  const { booking, setBooking } = useContext(BookingContext);

  return (
    <>
      {booking ?
        <>
          <div className='BookNow-pop-up-main'>
            <div className='BookNow-pop-up-heading'>
              <h1>Book Free Consultation</h1>
              <button className="pop-up-cancel" onClick={() => setBooking(false)} >X</button>
            </div>
            <hr />
            <form className='pop-up-form' >

              <input type="text" placeholder='Name' name="user_name" required />
              <input type="email" placeholder='Email ID' name="user_email" required />
              <input type="text" placeholder='Property Name' name="user_property" required />
              <button className='BookNow_broucher_btn' type='submit'>Book Now</button>
            </form>
            <div>
              <p className='pop-up-privacy-policy'>By submitting this form, you agree to the <span className='EMI_yellow_text'>Privacy Policy </span> & <span className='EMI_yellow_text'>Terms and Conditions</span></p>
            </div>
          </div>
        </> : ''
      }
    </>
  )
}

export default BookNowForm;
