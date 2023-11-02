import { useState } from 'react';
import { GrFormAdd } from 'react-icons/gr';
import { IoRemoveSharp } from 'react-icons/io5';



const Accordian = ({ accordian, setAccordian, index, details, heading }) => {

    const [active, setActive] = useState(false);

    const clickHandler = () => {
        if (accordian === index && active) {
            setActive(false);
            setAccordian(null);
        }
        if ((accordian !== index || accordian) && !active) {
            setActive(true);
            setAccordian(index);
        }
    }

    return (
        <div className="accordian">
            <div className="header">
                <p>
                    <span className={accordian}>0{index}.</span>
                    <span className={accordian}>{heading}</span>
                </p>
                {!active ?
                    <span onClick={clickHandler}><GrFormAdd /></span> :
                    <span onClick={clickHandler}><IoRemoveSharp /></span>}
            </div>
            <div className={accordian === index ? 'active' : ''}>
                {details.map((item, index) => <p key={index}>{item}</p>)}
            </div>
        </div>
    );
}
export default Accordian;