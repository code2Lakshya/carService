import { useContext, useEffect } from "react";
import { AppContext } from "../../utils/AppContext";
import HeroSectiono from "../../components/HeroSectiono/HeroSectiono";
import './ContactPage.css';



const ContactPage = () => {

    const { setCurrentTab } = useContext(AppContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentTab('Contact');
    }, [])

    return (
        <div className="contact-page-container">
            <HeroSectiono heading='Contact Us' to='Contact' className='contact-page-hero'/>
        </div>
    );
}
export default ContactPage;