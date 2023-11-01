import imgSrc from '../../../assets/car5.png';
import { ImQuotesLeft } from 'react-icons/im';
import userSrc from '../../../assets/testimonial.png';
import { useEffect, useState } from 'react';
import Wrapper from '../../../components/Wrapper/Wrapper';
import './PeopleSay.css';

const PeopleSay = () => {

    const [currentTab, setCurrentTab] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTab(prev => (prev === 3 ? 0 : prev + 1))
        }, 7000)
        return () => clearInterval(interval);
    }, [])

    useEffect(()=>{
        const c=document.querySelector('.people-cards');
        c.scrollTo(0,c.offsetHeight*currentTab);
    },[currentTab])

    const clickHandler = (e) => {
        setCurrentTab(Number(e.target.getAttribute('data-tab')));
    }

    return (
        <div className="people-container">
            <Wrapper className='people-wrapper'>
                <div className="people-image">
                    <img src={imgSrc} alt='taxi' />
                </div>
                <div className='people-content'>
                    <h1>What People Say</h1>
                    <p>
                        Mr Manoj comes onboard with a vast experience of more than 15 years in this industry.
                    </p>
                    <div className='people-bottom'>
                        <div className='people-cards'>
                            <div className={`people-card ${currentTab===0? 'active':''}`}>
                                <div className='card-quote'>
                                    <span><ImQuotesLeft /></span>
                                    <p>"Excellent Service"</p>
                                </div>
                                <div className='car-user'>
                                    <img src={userSrc} alt='user' />
                                    <p>Megha Charkaborthy</p>
                                </div>
                            </div>
                            <div className={`people-card ${currentTab===1? 'active':''}`}>
                                <div className='card-quote'>
                                    <span><ImQuotesLeft /></span>
                                    <p>"On time duty"</p>
                                </div>
                                <div className='car-user'>
                                    <img src={userSrc} alt='user' />
                                    <p>Akash Sharma</p>
                                </div>
                            </div>
                            <div className={`people-card ${currentTab===2? 'active':''}`}>
                                <div className='card-quote'>
                                    <span><ImQuotesLeft /></span>
                                   <p> "Trained Professionals"</p>
                                </div>
                                <div className='car-user'>
                                    <img src={userSrc} alt='user' />
                                    <p>Rishi Thapa</p>
                                </div>
                            </div>
                            <div className={`people-card ${currentTab===3? 'active':''}`}>
                                <div className='card-quote'>
                                    <span><ImQuotesLeft /></span>
                                   <p> "Good car service"</p>
                                </div>
                                <div className='car-user'>
                                    <img src={userSrc} alt='user' />
                                    <p>Raj Chaurasiya</p>
                                </div>
                            </div>
                        </div>
                        <div className='currentTab'>
                            <span className={currentTab === 0 ? 'active' : ''} data-tab='0' onClick={clickHandler}></span>
                            <span className={currentTab === 1 ? 'active' : ''} data-tab='1' onClick={clickHandler}></span>
                            <span className={currentTab === 2 ? 'active' : ''} data-tab='2' onClick={clickHandler}></span>
                            <span className={currentTab === 3 ? 'active' : ''} data-tab='3' onClick={clickHandler}></span>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
export default PeopleSay;