import React from 'react';
import Data from '../Data.json';
import '../stylesheets/TestimonialCard.css';
function TestimonialCard({testimonial_img, name, designation, star, desc}) {
  return (
    <div>
                  <div className="testimonials_card">
                <div className="testimonial_left">
                    <img src={require('../assets/testimonial/' + Data.testimonials.testimonial_left.testimonial_left_img )} alt=""/>
                </div>
                            <div className="testimonial_right">
                            <h1 className='testimonial_heading'>{Data.testimonials.testimonial_heading}</h1>
                            <h1 className='testimonial_name'>{name}</h1>
                            <p className='testimonial_desig'>{designation}</p>
                            <img src={require('../assets/testimonial/' + star)} alt="" className='testimonial_star'/>
                            <p className='testimonial_desc'>{desc}</p>
                            </div>

            </div>

    </div>
  )
}
export default TestimonialCard
