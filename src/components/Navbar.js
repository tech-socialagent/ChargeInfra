import Data from "../Data.json";
import "../stylesheets/Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

function Navbar() {
  const [menuButton, setMenuButton]=useState(false);
  function handleViewCancel(){
    setMenuButton(!menuButton)
  }


  return (
    <section className="navbar-main">
      <div className="navbar-right" >
        <AnchorLink href="#home_section">
          <img
            src={require("../assets/landing_page_asset/" + Data.navbar.logo)}
            alt="logo"
            className="logo"
          />
        </AnchorLink>
      </div>
      <div className="navbar-left">
         <ul className="navbar-list">
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
            <button className="navbar_contact">Contact Us</button> 
          </AnchorLink>
        </ul> 
      </div>
      { menuButton && <div className="navbar-left2">
         <ul className="navbar-list">
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
            <li><button className="navbar_contact">Contact Us</button>  </li>
          </AnchorLink>
        </ul> 
      </div> }
      <div id="mobile" onClick={handleViewCancel}>
         {!menuButton ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
      </div>
    </section>
  );
}
export default Navbar;
