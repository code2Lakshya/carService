import { useContext, useEffect } from "react";
import { AppContext } from "../../utils/AppContext";
import HeroSectiono from "../../components/HeroSectiono/HeroSectiono";
import './ContactPage.css';
import Wrapper from "../../components/Wrapper/Wrapper";
import DetailsForm from "../ServicePage/DetailsForm/DetailsForm";
import { BiSolidLocationPlus } from 'react-icons/bi';
import { AiOutlinePhone ,AiOutlineMail ,AiOutlineTwitter,AiOutlineInstagram,AiOutlineFacebook,AiOutlineWhatsApp} from 'react-icons/ai';


const ContactPage = () => {

    const { setCurrentTab } = useContext(AppContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentTab('Contact');
    }, [])

    return (
        <div className="contact-page-container">
            <HeroSectiono heading='Contact Us' to='Contact' className='contact-page-hero' />
            <div className="contact-details">
                <Wrapper className='contact-details-wrapper'>
                    <DetailsForm className='form' include='true' />
                    <div className="contact-address">
                        <h1>Our Contact Details</h1>
                        <p>
                            [Brand Name] is a professional driver service agency, we are India’s first and
                            only agency to have services across India.
                        </p>
                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="contact-header">
                                    <span><BiSolidLocationPlus /></span>
                                    <span>Address</span>
                                </div>
                                <p>
                                    [Address]
                                </p>
                            </div>
                            <div className="contact-card">
                                <div className="contact-header">
                                    <span><AiOutlinePhone /></span>
                                    <span>Phone</span>
                                </div>
                                <p>
                                    [Phone Number]
                                </p>
                            </div>
                            <div className="contact-card">
                                <div className="contact-header">
                                    <span><AiOutlineMail /></span>
                                    <span>Email</span>
                                </div>
                                <p>
                                    [Email]
                                </p>
                            </div>
                            <div className="social-links">
                                <p>Follow Us:</p>
                                <div className="links">
                                    <a href='/'><AiOutlineTwitter /></a>
                                    <a href='/'><AiOutlineInstagram /></a>
                                    <a href='/'><AiOutlineFacebook /></a>
                                    <a href='/'><AiOutlineWhatsApp /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
}
export default ContactPage;