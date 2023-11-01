import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import './CarForm.css';
import { AppContext } from "../../utils/AppContext";

const CarForm = () => {

    const [userInput, setUserInput] = useState({ name: '', email: '', phone: '', car: '', date: '', time: '', pickupLocation: '', dropLocation: '' });
    const {setForm}=useContext(AppContext);

    const inputHandler = (e) => {
        setUserInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div className="form-container">
                <div className="form-wrapper">
                    <span onClick={() => setForm(false)}><AiOutlineClose /></span>

                    <div className="form">
                        <h2>Book Your Car Now.</h2>
                        <form>
                            <input type='text'
                                id='name'
                                name='name'
                                placeholder="Enter Your Full Name"
                                value={userInput.name}
                                onChange={inputHandler}
                                autoComplete="on"

                            />
                            <input type='email'
                                id='email'
                                name='email'
                                placeholder="Enter Your Email Here"
                                value={userInput.email}
                                onChange={inputHandler}
                                autoComplete='on'
                            />
                            <input type='number'
                                name='phone'
                                id='phone'
                                value={userInput.phone}
                                onChange={inputHandler}
                                placeholder="Enter Your Phone Number"
                                autoComplete='on'
                            />
                            <input type='text'
                                name='car'
                                id='car'
                                value={userInput.car}
                                onChange={inputHandler}
                                placeholder="Enter Your Car Name"
                            />
                            <div id='date-time'>
                                <input type='date'
                                    name='date'
                                    value={userInput.date}
                                    id='date'
                                    onChange={inputHandler}
                                />
                                <input type='time'
                                    name='time'
                                    value={userInput.time}
                                    onChange={inputHandler}
                                    id='time'
                                />
                            </div>
                            <textarea rows='10'
                                cols='10'
                                name='pickupLocation'
                                placeholder="Enter Pick-Up Location"
                                value={userInput.pickupLocation}
                                onChange={inputHandler}
                            />
                            <textarea rows='10'
                                cols='10'
                                name='dropLocation'
                                placeholder="Enter Drop Location"
                                value={userInput.dropLocation}
                                onChange={inputHandler}
                            />
                        </form>
                    </div>
                </div>
        </div>
    );
}
export default CarForm;