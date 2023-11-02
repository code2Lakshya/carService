import { useState } from 'react';
import { IoRemoveSharp } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import './Accordian.css';


const Accordian = ({ accordian, setAccordian, index, details, heading }) => {

    const [active, setActive] = useState(false);

    const clickHandler = () => {
        if (accordian === index) {
            setActive(false);
            setAccordian(null);
        }
        if (accordian !== index) {
            setActive(true);
            setAccordian(index);
        }
    }

    return (
        <div className="accordian">
            <div className="header" onClick={clickHandler}>
                <p>
                    <span className={accordian}>0{index}.</span>
                    <span className={accordian}>{heading}</span>
                </p>
                {!active || accordian !== index ?
                    <span className='add'><IoMdAdd /></span> :
                    <span className='add'><IoRemoveSharp /></span>}
            </div>
            <div className={`accordian-dropdown ${accordian === index ? 'active' : ''}`}>
                {details.map((item, index) => <p key={index}>{item}</p>)}
            </div>
        </div>
    );
}
export default Accordian;