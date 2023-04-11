import Data from "../Data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../stylesheets/Home.css";
import BookNowForm from '../components/BookNowForm';
import { useState } from "react";

function Home() {
  const[popUpbtn, setpopUpbtn]=useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="home-main" id="home_section">
      <div className="background-overlay"></div>

      <Slider {...settings} className="">
        <div className="background-slider">
          <img
            src={require("../assets/landing_page_asset/" +
              Data.home_section.home_back_carasoul_img1)}
            alt="home background section"
          />
        </div>
        <div className="background-slider">
          <img
            src={require("../assets/landing_page_asset/" +
              Data.home_section.home_back_carasoul_img2)}
            alt="home background section"
          />
        </div>
        <div className="background-slider">
          <img
            src={require("../assets/landing_page_asset/" +
              Data.home_section.home_back_carasoul_img3)}
            alt="home background section"
          />
        </div>
        <div className="background-slider">
          <img
            src={require("../assets/landing_page_asset/" +
              Data.home_section.home_back_carasoul_img4)}
            alt="home background section"
          />
        </div>
      </Slider>
      <div className="slider-text-main">
        <div className="slider-text">
          <p className="home-sub-tagline">{Data.home_section.sub_tagline}</p>
          <h1 className="home-tagline">{Data.home_section.tagline}</h1>
          <p className="home-description">
            {Data.home_section.home_section_desc}
          </p>
          <button className="book-appointment-btn" onClick={()=>{setpopUpbtn(true)}}>
            {Data.home_section.book_appointment_text}
          </button>
          <BookNowForm trigger={popUpbtn}  setTrigger={setpopUpbtn}/>

        </div>
      </div>
    </section>
  );
}
export default Home;
