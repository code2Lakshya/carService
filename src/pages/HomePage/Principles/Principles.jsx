import src1 from '../../../assets/whyUS.jpeg';
import src2 from '../../../assets/whyUs2.jpeg';
import { AiOutlineFileDone } from 'react-icons/ai';
import './Principles.css';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../../../components/Wrapper/Wrapper';
import { useContext } from 'react';
import { AppContext } from '../../../utils/AppContext';

const Principles = () => {
const {setCurrentTab}=useContext(AppContext);
const navigate=useNavigate();
const clickHandler=()=>{
    setCurrentTab('Services');
    navigate('/Services')
}
    return (
        <div className="principles-container">
            <Wrapper className={'principles-wrapper'}>
                <div className="principles-images">
                    <img src={src1} alt='drive' />
                    <img src={src2} alt='drive2' />
                    <p>10 <span>Years Of Experience</span></p>
                </div>
                <div className='principles-content'>
                    <h1>Main Principles</h1>
                    <h3>Welcome to Car Driver Service Centre</h3>
                    <p>
                        We provide you driver at your doorstep for Hourly, Local drivers, Outstation Driver, Drop Drivers,
                        Permanent Drivers. At New Maa Tara Driver Service Centre we provide you with a complete and organized
                        solution by aiding with drivers on permanent, temporary, hourly or on a contract basis.
                    </p>
                    <div className='tags'>
                        <p><span><AiOutlineFileDone /></span>Driver For Local Drive</p>
                        <p><span><AiOutlineFileDone /></span>Hourly Basis</p>
                        <p><span><AiOutlineFileDone /></span>Parmanent Driver</p>
                        <p><span><AiOutlineFileDone /></span>Driver For Outstation Trip</p>
                    </div>
                   <span id='serviceBtn' onClick={clickHandler}>View All Services</span> 
                </div>
            </Wrapper>
        </div>
    );
}
export default Principles;