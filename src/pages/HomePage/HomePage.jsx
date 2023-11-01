import { useEffect } from "react";
import HeroSection from "./HeroSection/HeroSection";
import './HomePage.css';
import OurService from "./OurService/OurService";
import OurTeam from "./OurTeam/OurTeam";
import PeopleSay from "./PeopleSay/PeopleSay";
import Principles from "./Principles/Principles";
import Skills from "./Skills/Skills";


const HomePage = () => {

useEffect(()=>{
window.scrollTo(0,0);
},[])

    return (
        <div className="home-page">
            <HeroSection />
            <Principles />
            <Skills />
            <OurService />
            <OurTeam />
            <PeopleSay />
        </div>
    );
}
export default HomePage;