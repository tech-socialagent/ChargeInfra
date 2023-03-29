import React from 'react';
import '../stylesheets/Partner.css';
import Data from '../Data.json';

function Partner() {
  return (
    <section className='partner_main'>
        <h1 className='partner_main_heading'>{Data.partner.partner_heading}</h1>
        <p className='partner_main_desc'>{Data.partner.partner_desc}</p>
          <div class="slider">
        <div class="slide-track">
          {Data.partner.partner_img.map((item) => {
            return (
              <div class="slide">
                <img
                  src={require("../assets/partner/" + item)}
                  alt=""
                  height="150"
                  width="170"
                />
              </div>
            );
          })}
        </div>
      </div>


    </section>
  )
}

export default Partner
