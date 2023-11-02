import { useState } from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Accordian from "./Accordian/Accordian";
import './ServicesDetails.css';
import DetailsForm from "../DetailsForm/DetailsForm";


const ServicesDetails = () => {

    const [accordian, setAccordian] = useState(null);

    return (
        <div className="details-container">
            <Wrapper className='details-wrapper'>
                <div className="prices">
                    <h1>Price List</h1>
                    <p>Just find your answers below</p>
                    <div className="accordian-container">
                        <Accordian accordian={accordian} setAccordian={setAccordian} index={1} details={['charges', 'charges', 'charges', 'charges']} heading='Charges List 1' />
                        <Accordian accordian={accordian} setAccordian={setAccordian} index={2} details={['charges', 'charges', 'charges', 'charges']} heading='Charges List 2' />
                        <Accordian accordian={accordian} setAccordian={setAccordian} index={3} details={['charges', 'charges', 'charges', 'charges']} heading='Charges List 3' />
                    </div>
                </div>
                <DetailsForm  className='details-form-item' /> 
            </Wrapper>
        </div>
    );
}
export default ServicesDetails;