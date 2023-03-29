import React from 'react';
import '../stylesheets/Footer.css';
import Data from '../Data.json';
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Footer() {
  return (
    <section className='footer_main' id='contact_section'>
        <div className='footer_logo'>
        <img
            src={require("../assets/landing_page_asset/" + Data.navbar.logo)}
            alt="logo"
            className="logo"
          />
        </div>

        <div className='footer_menu_list'>
            <ul className='footer_menu_list_main'>
          <AnchorLink href="#home_section">
            <li>HOME</li>
          </AnchorLink>
          <AnchorLink href="#about_section">
            <li>ABOUT US</li>
          </AnchorLink>
          <AnchorLink href="#project_section">
            <li>PROJECT</li>
          </AnchorLink>
          <AnchorLink href="#services_section">
            <li>SERVICES</li>
          </AnchorLink> 
          {/* <AnchorLink href="#ourTeam_section">
            <li>OUR TEAM</li>
          </AnchorLink>
          <AnchorLink href="#clients_section">
            <li>CLIENTS</li>
          </AnchorLink> */}
          <AnchorLink href="#testimonials_section">
            <li>TESTIMONIALS</li>
          </AnchorLink>
          <AnchorLink href="#contact_section">
            <li><button className="navbar_contact">Contact Us</button> </li>
          </AnchorLink>
        </ul> 

        </div>
        <div className='footer_address'>
            <h1>{Data.footer.footer_address_title}</h1>
            <p>{Data.footer.footer_address}</p>
        </div>
        <div className='footer_contact'>
            <h1>{Data.footer.footer_contact_title}</h1>
            <p>{Data.footer.footer_contact_pnone_number}</p>
            <p>{Data.footer.footer_contact_email}</p>
        </div>
    </section>
  )
}

export default Footer
