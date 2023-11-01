import imgSrc1 from '../../../assets/oldCar.jpeg';
import imgSrc2 from '../../../assets/newCar.jpeg';


const OurCars = () => {

const dragHandler=(e)=>{
    console.log(e);
    document.querySelector('dragBtn + img')
}

    return (
        <div className="ourCars-container">
            <div className="ourCars-header">
                <h1>Our Cars</h1>
                <p>
                    We Provide Best Cars & We provide you driver at your doorstep for Hourly, Local drivers, Outstation Driver,
                    Drop Drivers, Permanent Drivers.
                </p>
            </div>
            <div className="drag-container">
                <div className="dragBtn">
                    <button>Book Now</button>
                    <button>Book Now</button>
                </div>
                <img src={imgSrc1} alt='old-car' />
                <span draggable='true' onDrag={dragHandler}>Drag</span>
                <img Src={imgSrc2} alt='new-car' />
            </div>
        </div>
    );
}
export default OurCars;