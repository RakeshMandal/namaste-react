import { useEffect, useState } from 'react';
import {LOGO_URL} from '../utils/constant'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () =>{

    const [btnName,setBtnName] = useState('Login');

    useEffect(()=>{
        console.log("UseEffect Called")
    },[btnName]);

    const onlineStatus = useOnlineStatus();
    return(
        <div className="heading">
            <div className="logo">
                <img className="logo-img" src={LOGO_URL} />
            </div>
            <div className="nav-bar">
            <ul>
                <li>{onlineStatus? "Online" : "Offline"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us </Link></li>
                <li>Cart</li>
            <button className='login' onClick={()=>{btnName ==='Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
            </ul>

            </div>
        </div>
    )
}

export default Header;