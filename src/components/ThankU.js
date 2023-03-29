import React from 'react';
import '../stylesheets/DownloadBroucher.css';
import Data from '../Data.json';
import { useState } from 'react';
function ThankU(props) {
  const [triggerEvent, setTriggerEvent] = useState(false);
  function showVerifyPop() {
    setTriggerEvent(true);
    document.getElementById("").style = "display:none";
    console.log("clicked");
  }

  return (
    <div className='download-pop-up-main' id='customer_quiz'>
        <div className='pop-up-heading'>
            <h1>Thank you</h1>
            <button className="pop-up-cancel"
                            onClick={() => {
                props.setTrigger(false);
              }}

            >X</button>
        </div>
        <hr/>
        <div className='pop-up-form'>
                <p>Thank you for downloading interior designing guide</p>
                <p>Your download should start automatically, is not click here.</p>
                <hr/>
                <p>Please answer a few more questions to help us better understand your  interior requirement.</p>
           <button className='download_broucher_btn'>
       {/* <a href="https://drive.google.com/file/d/1CIez7EbbRf5Nva9OZ8YzONQb1eEET39Z/view?usp=sharing" className='download_broucher_btn' target="_blank" rel=''> */}
       <p>Customer Quize</p>
            <img src={require('../assets/interior/' + Data.home_interior.home_interior_left.home_interior_btn_img)} alt=""/>
            {/* </a> */}
        </button>


        </div>
        <div>
            <p className='pop-up-privacy-policy'>By submitting this form, you agree to the <span className='EMI_yellow_text'>Privacy Policy </span> & <span className='EMI_yellow_text'>Terms and Conditions</span></p>
        </div>
    </div>
  );
}

export default ThankU
