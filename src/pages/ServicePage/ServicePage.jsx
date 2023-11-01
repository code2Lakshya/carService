import { useContext, useEffect } from "react";
import HeroSectiono from "../../components/HeroSectiono/HeroSectiono";
import './ServicePage.css';
import { AppContext } from "../../utils/AppContext";
import OurService from "../HomePage/OurService/OurService";
import { variable } from "../../utils/variables";
import Wrapper from "../../components/Wrapper/Wrapper";


const ServicePage = () => {

    const { setCurrentTab } = useContext(AppContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentTab('Services');
    }, [])

    return (
        <div className="service-page-container">
            <HeroSectiono heading='Services' to='Services' />
            <OurService />
            <div className="terms-container">
                <Wrapper>
                    <div className="terms-content">
                        <h1>[Brand Name] T&C</h1>
                        <p>This policy was last updated October 10, 2023.</p>
                        <ol type='1' start='1'>
                            {
                                variable.map((item, index) => <li key={index}>{item}</li>)
                            }
                        </ol>
                    </div>
                    <div className="carousel">
                        
                    </div>
                </Wrapper>
            </div>
        </div>
    );
}
export default ServicePage;