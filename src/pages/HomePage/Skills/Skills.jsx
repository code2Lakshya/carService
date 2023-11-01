import ProgressBar from "../../../components/progressBar/ProgressBar";
import imgSrc from '../../../assets/driving.jpeg';
import Wrapper from "../../../components/Wrapper/Wrapper";
import './Skills.css';


const Skills = () => {

    return (
        <div className="skills-container">
            <Wrapper className='skills-wrapper'>
                <div className="skills-content">
                    <h3>Our Skills</h3>
                    <h1>Why Choose Us</h1>
                    <p>
                        We realise that drivers are integral part of service. Our uniformed are experienced,
                        trained drivers doubles as your friend, philosopher & guide as he gets you to the very
                        heart of Kolkata India. our drivers who undergoes vigorous training every month and has
                        a thorough knowledge about the roads of Kolkata. Our all Cars are painted white are
                        Vacuum Cleaned daily washed and 'Checked' thoroughly have, White Seat Cover, Reading
                        light, Tissue paper and Car freshener and safety belt for the rear seat passenger.
                        We provide Mobile phones for each and every duty. After duty we take the feed back
                        from each and every Client to give better service for the next duty.
                    </p>
                    <div className="skills-bars">
                        <div className="skill-bar">
                            <ProgressBar heading='Valuable Cost' percent={80} />
                            <ProgressBar heading='High quality services' percent={95} />
                            <ProgressBar heading='Best Car & Drivers' percent={90} />
                        </div>
                    </div>
                </div>
                <div className="skills-image">
                    <img src={imgSrc} alt='skills' />
                </div>
            </Wrapper>
        </div>
    );
}
export default Skills;