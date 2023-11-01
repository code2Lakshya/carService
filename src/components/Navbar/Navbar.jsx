import Wrapper from "../Wrapper/Wrapper";
import { AiOutlineClockCircle, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { FiTwitter } from 'react-icons/fi';
import './Navbar.css';
import {  Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { AppContext } from "../../utils/AppContext";

const Navbar = () => {

    const {setForm} = useContext(AppContext);
    const [currentTab, setCurrentTab] = useState('Home');
    const [menu, setMenu] = useState(false);


    const clickHandler = (e) => {
        setCurrentTab(e.target.innerText);
        setMenu(false);
        setForm(false);
    }
    const formHandler = () => {
        setForm(true);
        setMenu(false);
    }

    return (
        <header>

            {/** Bannner  */}
            <div className="banner-container padding">
                <Wrapper>
                    <div className="banner">
                        <div className="banner-left">
                            <span><AiOutlineClockCircle /></span>
                            <span> Working Hours: [Mon - Sun 8:00 - 9:00]</span>
                        </div>
                        <div className="banner-center">
                            Contact: [Information]
                        </div>
                        <div className="banner-right">
                            <a href='/'><BiLogoFacebook /></a>
                            <a href='/'><AiOutlineInstagram /></a>
                            <a href='/'><FiTwitter /></a>
                            <a href='/'><AiOutlineWhatsApp /></a>
                        </div>
                    </div>
                </Wrapper>
            </div>

            {/** Navbar */}
            <div className="padding nav">
                <Wrapper>
                    <nav>
                        <p><Link to='/'>Brand Logo</Link></p>
                        <ul className={`nav-list ${menu ? 'active' : ''}`}>

                            <li
                                onClick={clickHandler}
                                className={currentTab === 'Home' ? 'active' : ''}
                            >
                                <Link to='/'>Home</Link>
                            </li>

                            <li
                                onClick={clickHandler}
                                className={currentTab === 'About' ? 'active' : ''}
                            >
                                <Link to='/about'>About</Link>
                            </li>

                            <li
                                onClick={clickHandler}
                                className={currentTab === 'Services' ? 'active' : ''}
                            >
                                <Link to='/services'>Services</Link>
                            </li>

                            <li
                                onClick={clickHandler}
                                className={currentTab === 'Contact Us' ? 'active' : ''}
                            >
                                <Link to='/contact'>Contact Us</Link>
                            </li>

                            <li
                                id='book'
                                onClick={formHandler}
                            >Book Your Car</li>
                        </ul>
                        {
                            !menu ?
                                <span className="menubtn" onClick={() => setMenu(true)}><AiOutlineMenu /></span> :
                                <span className="menubtn" onClick={() => setMenu(false)}><AiOutlineClose /></span>
                        }
                    </nav>
                </Wrapper>
            </div>

        </header>
    );
}
export default Navbar;