import Data from '../Data.json';
import '../stylesheets/Testimonials.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";


function Testimonials(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplaySpeed: 2000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
        };
    
    return(
        <section className="testimonials-main" id="testimonials_section">
            <Slider {...settings}>
            {Data.testimonials.testimonial_right.map((item)=>{
                return(
                    <TestimonialCard 
                    name={item.name}
                    designation={item.designation}
                    star={item.star_img}
                    desc={item.desc}
                    />
                )
            })}
            </Slider>

        </section>
    )       
}
export default Testimonials;