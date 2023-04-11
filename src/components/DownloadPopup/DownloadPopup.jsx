import React, { useContext, useState } from 'react'
import './DownloadPopup.css'
import { GrClose } from 'react-icons/gr'
import { DownloadContext } from '../../Context'
import { useNavigate } from 'react-router-dom'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import db from '../../FirebaseConfig'


const DownloadPopup = () => {
  const { setDownloadPop } = useContext(DownloadContext);
  const [active, setActive] = useState("Form")
  const navigate = useNavigate();
  const [otp, setotp] = useState('')



  const handleDeonloadBtn = (event) => {
    event.preventDefault();

    //reCaptch
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);


    const phoneNumber = '+919483262200';
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        alert('sms sent')
        setActive('OTP')
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        alert('Error')
      });
  }

  //handleVerification
  const handleVerification = () => {
    const code = otp;
    window.confirmationResult.confirm(code).then((result) => {
      const user = result.user;
      setActive("Quiz")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      alert(error)
      // ...
    });
  }

  const Form = () => {
    return (
      <>
        <form action="" className='Downloadform' onSubmit={handleDeonloadBtn} >
          <input type="text" placeholder='Name*' />
          <input type="email" placeholder='Email*' />
          <input type="text" placeholder='Phone Number*' />
          <input type="text" placeholder='Property Name' />

          <div className="downloadBtn"  >
            <input type='submit' value={active} />
          </div>
        </form>
        <div className="DownloadPolicy">
          <p>By submitting this form, you agree to the Privacy Policy & Terms and Conditions</p>
        </div>
      </>
    )
  }

  const Quiz = () => {
    return (
      <div className='QuizeWrap'>
        <div className="thanksText">
          Thank you for downloading
          interior designing guide
        </div>
        <div className="downloadAgain">
          Your download should start
          automatically, is not click here.
        </div>
        <div className="msg">
          Please answer a few more questions to
          help us better understand your  interior
          requirement.
        </div>
        <div className="quizBtn">
          <button onClick={() => navigate('/Quiz')} >Customer Quiz</button>
        </div>
      </div>
    )
  }
  const OTP = () => {
    return (
      <div className="sendOtpWrap">
        <input autoFocus="autofocus" type="text" value={otp} onChange={(e) => {setotp(e.target.value)}} placeholder='OTP' required />
        <button onClick={handleVerification} >Verify</button>
      </div>
    )
  }



  return (
    <>
      <div className="downloadWrap">
        <div className="heading">
          <h1>Download</h1>
          <div className="close" onClick={() => setDownloadPop(false)} >
            <GrClose />
          </div>
        </div>
        <div className="mainSection" >
          {active === "Form" ? <Form /> : active === "OTP" ? <OTP /> : <Quiz />}
        </div>

      </div>
      <div className="" id='recaptcha-container'></div>
    </>
  )
}

export default DownloadPopup