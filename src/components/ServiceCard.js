import React from "react";
import Data from "../Data.json";
import "../stylesheets/ServiceCard.css";
import BookNowForm from "../components/BookNowForm";
import { useContext } from "react";
import { BookingContext } from "../Context";

function ServiceCard() {

  const { booking, setBooking } = useContext(BookingContext);
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

              {/* onHover Content */}


              <div className="service_card_hover">

                <h1 className="cards_hover_name">{item.name}</h1>

                <p className="cards_hover_desc">{item.desc}</p>
                <button
                  className="card_hover_btn"
                  onClick={() => {
                    setBooking(true);
                  }}
                >
                  Book free consultation
                </button>
              </div>



            </div>

          </section>
        );
      })}
    </section>
  );
}

export default ServiceCard;
