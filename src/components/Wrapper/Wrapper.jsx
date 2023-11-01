import './Wrapper.css';


const Wrapper = ({ children, className }) => {

    return (
        <div className={`wrapper ${className ? className : ''}`}>
            {children}
        </div>
    );
}
export default Wrapper;