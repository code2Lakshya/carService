import './ProgressBar.css';


const ProgressBar = ({ heading, percent }) => {

    return (
        <div className="progress-bar">
                <p>{heading}</p>
            <div className="progress">
                <p id='bar' style={{ width: `${percent}%` }}>
                    <span>{percent}%</span>
                </p>
                <p style={{ width: `${100 - percent}%` }}></p>
            </div>
        </div>
    );
}

export default ProgressBar;