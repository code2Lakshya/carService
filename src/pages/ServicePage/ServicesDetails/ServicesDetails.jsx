import { useState } from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Accordian from "./Accordian/Accordian";



const ServicesDetails = () => {

    const [accordian, setAccordian] = useState(null);
    const [userInput, setUserInput] = useState({ name: '', email: '', message: '' });

    const changeHandler = (e) => {
        setUserInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setUserInput({name: '', email: '', message: '' });
    }

    return (
        <div className="details-container">
            <Wrapper className='details--wrapper'>
                <div className="prices">
                    <h1>Price List</h1>
                    <p>Just find your answers below</p>
                    <div className="accordian-container">
                        <Accordian accordian={accordian} setAccordian={setAccordian} index={1} details={['charges', 'charges', 'charges', 'charges']} heading='Charges List 1' />
                        <Accordian accordian={accordian} setAccordian={setAccordian} index={2} details={['charges', 'charges', 'charges', 'charges']} heading='Charges List 2' />
                        <Accordian accordian={accordian} setAccordian={setAccordian} index={3} details={['charges', 'charges', 'charges', 'charges']} heading='Charges List 3' />
                    </div>
                </div>
                <div className="details-form">
                    <h1>Still Got Questions ?</h1>
                    <form onSubmit={submitHandler}>
                        <input type='text'
                            name='name'
                            placeholder="Name"
                            value={userInput.name}
                            onChange={changeHandler}
                            autoComplete={true}
                            required
                        />
                        <input type='email'
                            name='email'
                            placeholder="Email"
                            value={userInput.email}
                            onChange={changeHandler}
                            autoComplete={true}
                            required
                        />
                        <textarea
                            name='message'
                            placeholder="Message"
                            value={userInput.message}
                            onChange={changeHandler}
                            row='10'
                            cols='10'
                            required
                        ></textarea>
                        <button type='submit'>Submit Now</button>
                    </form>
                </div>
            </Wrapper>
        </div>
    );
}
export default ServicesDetails;