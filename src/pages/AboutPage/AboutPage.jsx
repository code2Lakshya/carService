import { Link, NavLink } from 'react-router-dom';
import './AboutPage.css';
import aboutImg1 from '../../assets/aboutHero.png';
import aboutImg2 from '../../assets/aboutHero2.png';
import aboutImg3 from '../../assets/aboutHEro3.png';
import Wrapper from '../../components/Wrapper/Wrapper';
import icon from '../../assets/icon.png'
import { BiSupport } from 'react-icons/bi';
import Skills from '../HomePage/Skills/Skills';
import OurTeam from '../HomePage/OurTeam/OurTeam';
import PeopleSay from '../HomePage/PeopleSay/PeopleSay';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../utils/AppContext';
import HeroSectiono from '../../components/HeroSectiono/HeroSectiono';


const AboutPage = () => {

const {setCurrentTab}=useContext(AppContext);

useEffect(()=>{
window.scrollTo(0,0);
setCurrentTab('About');
},[])

    return (
        <div className="about-page-container">
           <HeroSectiono heading='About' to='About' />
            <div className='main-principles'>
                <Wrapper className='main-principles-wrapper'>
                    <div className='main-left'>
                        <img src={aboutImg1} alt='hero1' />
                        <img src={aboutImg2} alt='hero2' />
                        <div id='content'>
                            <img src={aboutImg3} alt='hero3' />
                            <h3>10</h3>
                            <p>Years Of Experience</p>
                        </div>
                    </div>
                    <div className='main-right'>
                        <h3>Main Principles</h3>
                        <h1>Welcome to [Brand Name]</h1>
                        <p>
                            We provide you driver at your doorstep for Hourly, Local drivers, Outstation Driver, Drop Drivers,
                            Permanent Drivers. At New MaaTara Driver Service we provide you with a complete and organized solution
                            by aiding with drivers on permanent, temporary, hourly or on a contract basis.
                        </p>
                        <div className='main-cards'>
                            <div className='main-card'>
                                <div className='icon'>
                                    <img src={icon} alt='icon' />
                                    <span><i className="fa-solid fa-person-arrow-up-from-line"></i></span>
                                </div>
                                <h3>Experience Drivers</h3>
                                <p>We have Professional Drivers</p>
                            </div>
                            <div className='main-card'>
                                <div className='icon'>
                                    <img src={icon} alt='icon' />
                                    <span><BiSupport /></span>
                                </div>
                                <h3>Quality Support</h3>
                                <p>we make the drive better and safer .</p>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <Skills />
            <OurTeam />
            <PeopleSay />
        </div>
    );
}
export default AboutPage;