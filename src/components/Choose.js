



// Why Choose Us Section




import React from "react";
import "../stylesheets/Choose.css";
import Data from "../Data.json";

function Choose() {
  return (
    <section className="choose_main">
      <h1 className="choose_section_heading">
        {Data.choose_us_section.choose_heading}
      </h1>
      <p className="animinated-line"></p>

      <div className="choose_icon_section">
        <div className="choose_us_section">
          <img
            src={require("../assets/chhose_us/" +
              Data.choose_us_section.choose_us_1.img)}
            alt=""
          />
          <div className="choose_us_desc">
            <h1>{Data.choose_us_section.choose_us_1.number}</h1>
            <p>{Data.choose_us_section.choose_us_1.des}</p>
          </div>
        </div>
        <div className="choose_us_section">
          <img
            src={require("../assets/chhose_us/" +
              Data.choose_us_section.choose_us_2.img)}
            alt=""
          />
          <div className="choose_us_desc">
            <h1>{Data.choose_us_section.choose_us_2.number}</h1>
            <p>{Data.choose_us_section.choose_us_2.des}</p>
          </div>
        </div>
        <div className="choose_us_section">
          <img
            src={require("../assets/chhose_us/" +
              Data.choose_us_section.choose_us_3.img)}
            alt=""
          />
          <div className="choose_us_desc">
            <h1>{Data.choose_us_section.choose_us_3.number}</h1>
            <p>{Data.choose_us_section.choose_us_3.des}</p>
          </div>
        </div>
      </div>
      <div className="choose_icon_section">
        <div className="choose_us_section">
          <img
            src={require("../assets/chhose_us/" +
              Data.choose_us_section.choose_us_4.img)}
            alt=""
          />
          <div className="choose_us_desc">
            <h1>{Data.choose_us_section.choose_us_4.number}</h1>
            <p>{Data.choose_us_section.choose_us_4.des}</p>
          </div>
        </div>
        <div className="choose_us_section">
          <img
            src={require("../assets/chhose_us/" +
              Data.choose_us_section.choose_us_5.img)}
            alt=""
          />
          <div className="choose_us_desc">
            <h1>{Data.choose_us_section.choose_us_5.number}</h1>
            <p>{Data.choose_us_section.choose_us_5.des}</p>
          </div>
        </div>
        <div className="choose_us_section">
          <img
            src={require("../assets/chhose_us/" +
              Data.choose_us_section.choose_us_6.img)}
            alt=""
          />
          <div className="choose_us_desc">
            <h1>{Data.choose_us_section.choose_us_6.number}</h1>
            <p>{Data.choose_us_section.choose_us_6.des}</p>
          </div>
        </div>
        <div className="choose_us_section">
          <img
            src={require("../assets/chhose_us/" +
              Data.choose_us_section.choose_us_7.img)}
            alt=""
          />
          <div className="choose_us_desc">
            <h1>{Data.choose_us_section.choose_us_7.number}</h1>
            <p>{Data.choose_us_section.choose_us_7.des}</p>
          </div>
        </div>
      </div>
      <section className="about_us_second">
        <section className="choose_back">
          <section className="choose_warranty_section">
            <h1>{Data.choose_us_section.choose_warranty.heading}</h1>
            {/* <p className="animinated-line-choose-warranty"></p> */}

            <ul className="warranty_list">
              <li>{Data.choose_us_section.choose_warranty.des1}</li>
              <li>{Data.choose_us_section.choose_warranty.des2}</li>
            </ul>
          </section>
          <section className="choose_technology_section">
            <h1>{Data.choose_us_section.technology_science.heading}</h1>

            <ul className="technology_list">
              <li>{Data.choose_us_section.technology_science.desc1}</li>
              <li>{Data.choose_us_section.technology_science.desc2}</li>
              <li>{Data.choose_us_section.technology_science.desc3}</li>
              <li>{Data.choose_us_section.technology_science.desc4}</li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Choose;
