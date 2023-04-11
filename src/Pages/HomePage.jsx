import React from 'react'
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Choose from '../components/Choose';
import Services from '../components/Services';
import Construction from '../components/Construction';
import HowWork from '../components/HowWork';
import EMI from '../components/EMI';
import ParentCompany from '../components/ParentCompany';
import HomeInterior from '../components/HomeInterior';
import Partner from '../components/Partner';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import OurProject from '../components/OurProject';

const HomePage = () => {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Choose />
            <OurProject />
            <Services />
            <Construction />
            <HowWork />
            <EMI />
            <ParentCompany />
            <HomeInterior />
            <Partner />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default HomePage