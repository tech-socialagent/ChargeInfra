// // import React, { useState } from 'react';
// // import Data from '../Data.json';
// // import { auth } from "../components/Config";
// // import {
// //   getAuth,
// //   signInWithPhoneNumber,
// //   RecaptchaVerifier,
// // } from "firebase/auth";

// // import '../stylesheets/verify.css';
// // function Verify() {
// //   const [number, setNumber] = useState();

// //   const handleClick= () => {
// //     const auth = getAuth();
// //     window.recaptchaVerifier = new RecaptchaVerifier(
// //       "sign-in-button",
// //       {
// //         size: "invisible",
// //         callback: (response) => {
// //           // reCAPTCHA solved, allow signInWithPhoneNumber.
// //         },
// //       },
// //       auth);
// //       const appVerifier = window.recaptchaVerifier;

// //       // const phoneNumber = "+917767923359";
// //       function userNumber(e){
// //         setNumber(e.target.value)
// //       }
// //         const phoneNumber=number;
// //       signInWithPhoneNumber(auth, phoneNumber, appVerifier)
// //         .then((confirmationResult) => {
// //           // SMS sent. Prompt user to type the code from the message, then sign the
// //           // user in with confirmationResult.confirm(code).
// //           window.confirmationResult = confirmationResult;
// //           // ...
// //         })
// //         .catch((error) => {
// //           // Error; SMS not sent
// //           // ...
// //           alert("error");
// //         });
// //     };

// //     const onSubmitOTP = (e) =>{
// //       e.preventDefault()
// //       const code = this.state.otp
// //       console.log(code)
// //       window.confirmationResult.confirm(code).then((result) => {
// //         // User signed in successfully.
// //         const user = result.user;
// //         console.log(JSON.stringify(user))
// //         alert("User is verified")
// //         // ...
// //       }).catch((error) => {
// //         // User couldn't sign in (bad verification code?)
// //         // ...
// //       });
// //     }

// //     return (
// //     <section className='verify_main'>
// //         <div className='verify_text'>
// //             <h1 className='verify_text_heading'>{Data.verify.verify_heading}</h1>
// //             <p className='verify_text_desc'>We enhance the appearance and overall ambiance of a living space <br/> by adding elements of style, design, and sophistication.</p>
// //             <p className='enter_mobile_number'>{Data.verify.enter_number}</p>
// //             <input type="number" placeholder={Data.verify.enter_number} className="number_field"  name="mobile" />
// //             <br/>
// //             <button className='verify_btn' onClick={() => handleClick()} id='sign-in-button'>{Data.verify.send_otp_btn}</button>

// //             <p className='verify_text_sub_desc'>{Data.verify.verify_sub_desc}</p>
// //             <input type="number" placeholder={Data.verify.verify_placeholder} className="number_field"  name="otp" />
// //             <br/>
// //             <button className='verify_btn' onClick={onSubmitOTP}>{Data.verify.verify_btn}</button>
// //                 <p className='resend_otp'>Resend OTP</p>
// //         </div>
// //     </section>
// //   )
// // }

// // export default Verify

// import Data from '../Data.json';
// import React from 'react'
// import firebase from './firebase'
// import '../stylesheets/verify.css';
// import { auth } from "../components/Config";
// // import {
// //   getAuth,
// //   signInWithPhoneNumber,
// //   RecaptchaVerifier,
// // } from "firebase/auth";

// class Verify extends React.Component {
//   handleChange = (e) =>{
//     const {name, value } = e.target
//     this.setState({
//         [name]: value
//       })
//   }
//   configureCaptcha = () =>{
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         this.onSignInSubmit();
//         console.log("Recaptca varified")
//       },
//       defaultCountry: "IN"
//     });
//   }
//   onSignInSubmit = (e) => {
//     e.preventDefault()
//     this.configureCaptcha()
//     const phoneNumber = "+91" + this.state.mobile
//     console.log(phoneNumber)
//     const appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           window.confirmationResult = confirmationResult;
//           console.log("OTP has been sent")
//           // ...
//         }).catch((error) => {
//           // Error; SMS not sent
//           // ...
//           console.log("SMS not sent")
//         });
//   }
//   onSubmitOTP = (e) =>{
//     e.preventDefault()
//     const code = this.state.otp
//     console.log(code)
//     window.confirmationResult.confirm(code).then((result) => {
//       // User signed in successfully.
//       const user = result.user;
//       console.log(JSON.stringify(user))
//       alert("User is verified")
//       // ...
//     }).catch((error) => {
//       // User couldn't sign in (bad verification code?)
//       // ...
//     });
//   }
//   render() {
//     return (
//     <section className='verify_main'>
//         <div className='verify_text'>
//             <h1 className='verify_text_heading'>{Data.verify.verify_heading}</h1>
//             <p className='verify_text_desc'>We enhance the appearance and overall ambiance of a living space <br/> by adding elements of style, design, and sophistication.</p>
//             <p className='enter_mobile_number'>{Data.verify.enter_number}</p>
//             <input type="number" placeholder={Data.verify.enter_number} className="number_field"  name="mobile" />
//             <br/>
//             <button className='verify_btn' onClick={this.onSignInSubmit} id='sign-in-button'>{Data.verify.send_otp_btn}</button>

//             <p className='verify_text_sub_desc'>{Data.verify.verify_sub_desc}</p>
//             <input type="number" placeholder={Data.verify.verify_placeholder} className="number_field"  name="otp" />
//             <br/>
//             <button className='verify_btn' onClick={this.onSubmitOTP}>{Data.verify.verify_btn}</button>
//                 <p className='resend_otp'>Resend OTP</p>
//         </div>
//     </section>
//   )

//   }
// }
// export default Verify

// import app from './Config';
// import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

// const auth = getAuth(app);

// function Verify(){
//   const captchaVerify=()=>{
// window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//   'size': 'normal',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     // ...
//   },
//   'expired-callback': () => {
//     // Response expired. Ask user to solve reCAPTCHA again.
//     // ...
//   }
// }, auth);

// const onSignSubmit=()=>{
//   const phoneNumber = "91 7767923359";
// const appVerifier = window.recaptchaVerifier;

// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });

// }

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
