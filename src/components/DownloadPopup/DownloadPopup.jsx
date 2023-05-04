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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [propertyName, setPropertyName] = useState('')
  const navigate = useNavigate();
  const [otp, setotp] = useState('')
  const [invalidOtp, setinvalidOtp] = useState(false)



  const handleDeonloadBtn = (event) => {
    event.preventDefault();
    setActive('OTP')

    //reCaptch
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);


    const phoneNumber = '+91' + phoneno;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {

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
      setinvalidOtp(true);
      // ...
    });
  }



  const Thankyou = () => {
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
          {active === "Form" ?

            // Info Form
            <div className='form'>
              <form action="" className='Downloadform' onSubmit={handleDeonloadBtn} >
                <input type="text" placeholder='Name*' required onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email*' required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Phone Number*' required value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
                <input type="text" placeholder='Property Name' required value={propertyName} onChange={(e) => setPropertyName(e.target.value)} />

                <div className="downloadBtn"  >
                  <input type='submit' value="SUBMIT" />
                </div>
              </form>
              <div className="DownloadPolicy">
                <p className='pop-up-privacy-policy'>By submitting this form, you agree to the <span className='EMI_yellow_text'>Privacy Policy </span> & <span className='EMI_yellow_text'>Terms and Conditions</span></p>
              </div>
            </div>

            : active === "OTP" ?

              // OPT form

              <div className="sendOtpWrap">
                <input className={invalidOtp ? 'inputError' : 'input'} autoFocus="autofocus" type="text" value={otp} onChange={(e) => { setotp(e.target.value) }} placeholder='Enter OTP' required />
                <button onClick={handleVerification} >Verify</button>
                <p className={invalidOtp ? 'alertActive' : 'alertInactive'}>Invalid OTP</p>
              </div>

              :

              // thankyou
              <Thankyou />

          }
        </div>

      </div>
      <div className="" id='recaptcha-container'></div>
    </>
  )
}

export default DownloadPopup