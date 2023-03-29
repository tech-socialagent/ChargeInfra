import React from "react";
import Data from "../Data.json";
import "../stylesheets/ServiceCard.css";
import BookNowForm from "../components/BookNowForm";
import { useState } from "react";
function ServiceCard() {
  const [popUpbtn, setpopUpbtn] = useState(false);
  const [trigger, setTrigger] = useState();
  return (
    <section className="service_card_main">
      {Data.services_section.services_list.map((item) => {
        return (
          <section>
            <div className="service_card">
              <img
                src={require("../assets/services/" + item.img)}
                alt=""
                className="service_card_img"
              />
              <div className="service_card_name_main">
                <p className="service_card_name">{item.name}</p>
                <img
                  src={require("../assets/services/name plate.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="service_card_hover">
            
              <h1 className="card_hover_name">{item.name}</h1>
              <p className="changing_name">{item.changing_name1}</p>
              <p className="changing_name">{item.changing_name2}</p>
              <p className="changing_name">{item.changing_name3}</p>
              <p className="changing_name">{item.changing_name4}</p>


              <p className="card_hover_desc">{item.desc}</p>
              <button
                className="card_hover_btn"
                onClick={() => {
                  setpopUpbtn(true);
                }}
              >
                Book free consultation
              </button>
              <BookNowForm trigger={popUpbtn} setTrigger={setpopUpbtn} />
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default ServiceCard;
