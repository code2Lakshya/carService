import { useState } from "react";
import './DetailsForm.css';



const DetailsForm=({include,className})=>{

    const [userInput, setUserInput] = useState({ name: '', email: '', message: '' });

    const changeHandler = (e) => {
        setUserInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setUserInput({name: '', email: '', message: '' });
    }

    return(
        <div className={`details-form ${className ? className: ''}`}>
        <h1>Still Got Questions ?</h1>
        <form onSubmit={submitHandler}>
            <input type='text'
                name='name'
                placeholder="Name"
                value={userInput.name}
                className="input"
                onChange={changeHandler}
                autoComplete={true}
                required
            />
            <input type='email'
                name='email'
                placeholder="Email"
                className="input"
                value={userInput.email}
                onChange={changeHandler}
                autoComplete={true}
                required
            />
            <textarea
                name='message'
                placeholder="Message"
                className="input"
                id='message'
                value={userInput.message}
                onChange={changeHandler}
                row='20'
                cols='10'
                required
            ></textarea>
            {include && <p>Include</p>}
            <button type='submit'>Submit Now</button>
        </form>
    </div>
    );
}
export default DetailsForm;