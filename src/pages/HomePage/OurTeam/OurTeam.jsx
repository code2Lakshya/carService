import user1 from '../../../assets/user1.jpeg';
import user2 from '../../../assets/user2.jpeg';
import user3 from '../../../assets/user3.jpeg';
import user4 from '../../../assets/user4.jpeg';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import './OurTeam.css';
import { useState } from 'react';
import Wrapper from '../../../components/Wrapper/Wrapper';

const OurTeam = () => {

    const [counter, setCounter] = useState(0);

    const counterHandler = () => {
        if (counter === 0) {
            const element = document.querySelectorAll('[data-number]');
            element.forEach(item => {
                let count = 0;
                const max = item.getAttribute('data-number');
                setInterval(() => {
                    if (count < max)
                        item.innerText = ++count;
                }, 1000 / max)
            })
            setCounter(1);
        }
    }

    return (
        <div className="team-container" onMouseOver={counterHandler}>
            <Wrapper>
                <div className="team-heading">
                    <h1>Expert People</h1>
                    <p>Our Team</p>
                </div>
                <div className="team-cards">
                    <div className="team-card">
                        <img src={user1} alt='member' />
                        <ul>
                            <li><a href='/'><AiOutlineFacebook /></a></li>
                            <li><a href='/'><AiOutlineInstagram /></a></li>
                            <li><a href='/'><AiOutlineTwitter /></a></li>
                            <li><a href='/'><AiOutlineWhatsApp /></a></li>
                        </ul>
                    </div>
                    <div className="team-card">
                        <img src={user2} alt='member' />
                        <ul>
                            <li><a href='/'><AiOutlineFacebook /></a></li>
                            <li><a href='/'><AiOutlineInstagram /></a></li>
                            <li><a href='/'><AiOutlineTwitter /></a></li>
                            <li><a href='/'><AiOutlineWhatsApp /></a></li>
                        </ul>
                    </div>
                    <div className="team-card">
                        <img src={user3} alt='member' />
                        <ul>
                            <li><a href='/'><AiOutlineFacebook /></a></li>
                            <li><a href='/'><AiOutlineInstagram /></a></li>
                            <li><a href='/'><AiOutlineTwitter /></a></li>
                            <li><a href='/'><AiOutlineWhatsApp /></a></li>
                        </ul>
                    </div>
                    <div className="team-card">
                        <img src={user4} alt='member' />
                        <ul>
                            <li><a href='/'><AiOutlineFacebook /></a></li>
                            <li><a href='/'><AiOutlineInstagram /></a></li>
                            <li><a href='/'><AiOutlineTwitter /></a></li>
                            <li><a href='/'><AiOutlineWhatsApp /></a></li>
                        </ul>
                    </div>
                </div>
                <div className='team-counter-cards'>
                    <div className='counter-card'>
                        <p><span><i className="fa-solid fa-person-military-pointing"></i></span></p>
                        <span data-number='49'>49</span>
                        <h3>Expert Drivers</h3>
                    </div>
                    <div className='counter-card'>
                        <p><span><i className="fa-solid fa-users"></i></span></p>
                        <p><span data-number='999'>999</span><span>+</span></p>
                        <h3>Satisfied Clients</h3>
                    </div>
                    <div className='counter-card'>
                        <p><span><i className="fa-solid fa-person-arrow-up-from-line"></i></span></p>
                        <span data-number='10'>10</span>
                        <h3>Years Of Experience</h3>
                    </div>
                    <div className='counter-card'>
                        <p><span><i className="fa-solid fa-car"></i></span></p>
                        <span data-number='20'>20</span>
                        <h3>Cars</h3>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
export default OurTeam;