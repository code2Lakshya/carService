import { useContext, useEffect, useState } from "react";
import HeroSectiono from "../../components/HeroSectiono/HeroSectiono";
import './ServicePage.css';
import { AppContext } from "../../utils/AppContext";
import OurService from "../HomePage/OurService/OurService";
import { variable } from "../../utils/variables";
import Wrapper from "../../components/Wrapper/Wrapper";
import imgSrc1 from '../../assets/carousel1.jpeg';
import imgSrc2 from '../../assets/carousel2.jpeg';
import imgSrc3 from '../../assets/carousel3.jpeg';
import ServicesDetails from "./ServicesDetails/ServicesDetails";


const ServicePage = () => {

    const { setCurrentTab } = useContext(AppContext);
    const [card, setCard] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentTab('Services');
        const loop = setInterval(() => {
            setCard(prev => prev === 2 ? 0 : prev + 1);
        }, 7000)
        return () => clearInterval(loop);
    }, [])

    useEffect(() => {
        const element = document.querySelector('.carousel-cards');
        element.scrollTo(element.offsetWidth * card, 0);
    }, [card])

    const clickHandler = (e) => {
        setCard(Number(e.target.getAttribute('data-tab')));
        console.log(e.target.getAttribute('data-tab'))
    }

    return (
        <div className="service-page-container">
            <HeroSectiono heading='Services' to='Services' className='hero-section-services' />
            <OurService />
            <div className="terms-container">
                <Wrapper className='terms-container-wrapper'>
                    <div className="terms-content">
                        <h1>[Brand Name] T&C</h1>
                        <p>This policy was last updated October 10, 2023.</p>
                        <ol type='1' start='1'>
                            {
                                variable.map((item, index) => <li key={index}>{item}</li>)
                            }
                        </ol>
                    </div>
                    <div className="carousel">
                        <div className="carousel-cards">
                            <div className="carousel-card">
                                <img src={imgSrc1} alt='carousel' />
                            </div>
                            <div className="carousel-card">
                                <img src={imgSrc2} alt='carousel' />
                            </div>
                            <div className="carousel-card">
                                <img src={imgSrc3} alt='carousel' />
                            </div>
                        </div>
                        <div className="carousel-btn">
                            <span className={`${card === 0 ? 'active' : ''}`} onClick={clickHandler} data-tab='0'></span>
                            <span className={`${card === 1 ? 'active' : ''}`} onClick={clickHandler} data-tab='1'></span>
                            <span className={`${card === 2 ? 'active' : ''}`} onClick={clickHandler} data-tab='2'></span>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <ServicesDetails />
        </div>
    );
}
export default ServicePage;