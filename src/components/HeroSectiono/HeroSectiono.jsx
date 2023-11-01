import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../utils/AppContext";
import './HeroSectiono.css';

const HeroSectiono=({heading,to})=>{

    const {setCurrentTab}=useContext(AppContext);

    return(
        <div className='about-page-hero'>
        <h1>{heading}</h1>
        <div className='btn'>
            <span onClick={()=>setCurrentTab('Home')}><Link to='/'>Home</Link></span>
            <span>/</span>
            <NavLink to={`/${to}`}>{to}</NavLink>
        </div>
    </div>
    );
}
export default HeroSectiono;