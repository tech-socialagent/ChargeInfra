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
          {/* <AnchorLink href="#project_section">
            <li>PROJECT</li>
          </AnchorLink> */}
          <AnchorLink href="#services_section">
            <li>SERVICES</li>
          </AnchorLink> 
          {/* <AnchorLink href="#ourTeam_section">
            <li>OUR TEAM</li>
          </AnchorLink>
          <AnchorLink href="#clients_section">
            <li>CLIENTS</li>
          </AnchorLink> */}
          <AnchorLink  href="#testimonials_section">
            <li>TESTIMONIALS</li>
          </AnchorLink>
          <a href="tel:+918431097343">
            <button className="navbar_contact">Contact Us</button> 
          </a>
        </ul> 
      </div>
      { menuButton && <div className="navbar-left2">
         <ul className="navbar-list">
          <AnchorLink onClick={()=> setMenuButton(false)} href="#home_section">
            <li>HOME</li>
          </AnchorLink>
          <AnchorLink onClick={()=> setMenuButton(false)} href="#about_section">
            <li>ABOUT US</li>
          </AnchorLink>
          {/* <AnchorLink href="#project_section">
            <li>PROJECT</li>
          </AnchorLink> */}
          <AnchorLink onClick={()=> setMenuButton(false)} href="#services_section">
            <li>SERVICES</li>
          </AnchorLink> 
          {/* <AnchorLink href="#ourTeam_section">
            <li>OUR TEAM</li>
          </AnchorLink>
          <AnchorLink href="#clients_section">
            <li>CLIENTS</li>
          </AnchorLink> */}
          <AnchorLink onClick={()=> setMenuButton(false)} href="#testimonials_section">
            <li>TESTIMONIALS</li>
          </AnchorLink>
          <a onClick={()=> setMenuButton(false)} href="tel:+918431097343">
            <li><button className="navbar_contact">Contact Us</button>  </li>
          </a>
        </ul> 
      </div> }
      <div id="mobile" onClick={handleViewCancel}>
         {!menuButton ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
      </div>
    </section>
  );
}
export default Navbar;
