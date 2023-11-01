import imgsrc from '../../../assets/icon.png';
import { PiCarSimpleBold } from 'react-icons/pi';
import { GiCarWheel } from 'react-icons/gi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Wrapper from '../../../components/Wrapper/Wrapper';
import './OurService.css';


const OurService = () => {

    return (
        <div className="ourServices-container">
            <Wrapper className='ourServices-wrapper'>
                <h1>Our Services</h1>
                <div className="ourServices-cards">
                    <div className="ourServices-card">
                        <div className="icons">
                            <img src={imgsrc} alt='icon' />
                            <span><PiCarSimpleBold /></span>
                        </div>
                        <h3>Best Cars</h3>
                        <p>
                            We have a fleet of cars that include small luxury cars to premium category CARS.
                        </p>
                        <Link to='/services'>Read More</Link>
                    </div>
                    <div className="ourServices-card">
                        <div className="icons">
                            <img src={imgsrc} alt='icon' />
                            <span><GiCarWheel /></span>
                        </div>
                        <h3>Well Skilled Drivers</h3>
                        <p>
                            Our uniformed are experienced, trained drivers doubles as your friend.
                        </p>
                        <Link to='/services'>Read More</Link>
                    </div>
                    <div className="ourServices-card">
                        <div className="icons">
                            <img src={imgsrc} alt='icon' />
                            <span><RiCustomerService2Line /></span>
                        </div>
                        <h3>Best Customer Servivce</h3>
                        <p>
                            we also have a strong back-up support along with 24 x 7.
                        </p>
                        <Link to='/services'>Read More</Link>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
export default OurService;