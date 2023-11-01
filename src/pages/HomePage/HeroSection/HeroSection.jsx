import { useEffect, useState } from 'react';
import car1 from '../../../assets/car1.jpg';
import car2 from '../../../assets/car2.webp';
import car3 from '../../../assets/car3.jpg';
import car4 from '../../../assets/car4.jpg';
import './HeroSection.css';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const HeroSection = () => {

    const [card, setCard] = useState(0);

    useEffect(() => {
        const loop = setInterval(() => {
            setCard(prev => prev === 3 ? 0 : prev + 1);
        }, 7000)

        const handleResize = () => {
            setCard(0);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(loop);
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        document.querySelector('.hero-cards').scrollTo(window.innerWidth * card, 0);
    }, [card])

    const clickHandler = (type) => {
        if (type === 'next') {
            card === 3 ? setCard(0) : setCard(card + 1);
        }
        else {
            card === 0 ? setCard(3) : setCard(card - 1);
        }
    }

    return (
        <div className="hero-container">
            <div className="hero-cards">
                <div className={`hero-card ${card === 0 ? 'active' : 'in-active'}`}>
                    <div className='content'>
                        <p>Our Car Rental Service is a professional driver service agency</p>
                        <button>Book Now</button>
                    </div>
                    <img src={car1} alt='car1' />
                </div>
                <div className={`hero-card ${card === 1 ? 'active' : 'in-active'}`}>
                    <div className='content'>
                        <p>Best Car Drive Center in Kolkata</p>
                        <button>Book Now</button>
                    </div>
                    <img src={car2} alt='car1' />
                </div>
                <div className={`hero-card ${card === 2 ? 'active' : 'in-active'}`}>
                    <div className='content'>
                        <p>Our Car Rental Service is a professional driver service agency</p>
                        <button>Book Now</button>
                    </div>
                    <img src={car3} alt='car1' />
                </div>
                <div className={`hero-card ${card === 3 ? 'active' : 'in-active'}`}>
                    <div className='content'>
                        <p>Best Car Drive Center in Kolkata</p>
                        <button>Book Now</button>
                    </div>
                    <img src={car4} alt='car1' />
                </div>
            </div>
            <div className='hero-btn'>
                <span onClick={() => clickHandler('previous')}><BiLeftArrowAlt />Previous</span>
                <span onClick={() => clickHandler('next')}>Next<BiRightArrowAlt /></span>
            </div>
        </div>
    );
}
export default HeroSection;