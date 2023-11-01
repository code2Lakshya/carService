import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import './Footer.css';
import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";


const Footer = () => {

const {setCurrentTab}=useContext(AppContext);

        const {isLoaded}=useLoadScript({
            googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        })
        console.log(process.env.REACT_APP_GOOGLE_API_KEY)

    return (
        <footer>
            <Wrapper className='footer-wrapper'>
                <div className="footer-content">
                    <div className="brand-details">
                        <h1>Brand Logo</h1>
                        <p>
                            [Brand Name] is a professional driver service agency, we are India’s first and only agency to have services across India.
                        </p>
                    </div>
                    <div className="links-container bottom">
                        <h3>Links</h3>
                        <ul>
                            <li onClick={()=> setCurrentTab('Home')}><Link to='/'>Home</Link></li>
                            <li onClick={()=> setCurrentTab('About')}><Link to='/About'>About</Link></li>
                            <li onClick={()=> setCurrentTab('Services')}><Link to='/Services'>Services</Link></li>
                            <li onClick={()=> setCurrentTab('Contact')}><Link to='/Contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="address bottom">
                    <h3>Address</h3>
                        <p>
                            <span> <CiLocationArrow1 /></span>
                            [Address]
                        </p>
                        <p>
                            <span> <AiOutlineMail /></span>
                            [Email]
                        </p>
                        <p>
                            <span> <BsTelephoneForward /></span>
                            [Phone]
                        </p>
                        <p>
                            <span> <AiOutlineWhatsApp /></span>
                            [Whatsapp]
                        </p>
                    </div>
                    <div className="location bottom">
                        <h3>Location</h3>
                        {isLoaded && 
                        <GoogleMap zoom={10} center={{lat: 22.572645, lng: 88.363892}} mapContainerClassName='map-container'>
                            <Marker position={{lat: 22.572645, lng: 88.363892}} />
                        </GoogleMap>}
                    </div>
                </div>
                <p className="footer">
                    Copyright @2023 [Brand Name] || All Rights Preserved
                </p>
            </Wrapper>
        </footer>
    );
}
export default Footer;