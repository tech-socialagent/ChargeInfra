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
import DownloadPopUp from '../components/DownloadBroucher';
import OurProjectCard from '../components/OurProjectCard';
import ParentQuize from '../components/ParentQuize';
import ServiceCard from '../components/ServiceCard';
import ThankU from '../components/ThankU';
import Thanks from '../components/Thanks';
import BookNowForm from '../components/BookNowForm';

const HomePage = () => {
    return (
        <div className="App">
            <Navbar />
            <BookNowForm />
            <Home />
            <About />
            <Choose />
            {/* <OurProject /> */}
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