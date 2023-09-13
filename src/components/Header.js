import { useEffect, useState } from 'react';
import {LOGO_URL} from '../utils/constant'

const Header = () =>{

    const [btnName,setBtnName] = useState('Login');

    useEffect(()=>{
        console.log("UseEffect Called")
    },[btnName])
    return(
        <div className="heading">
            <div className="logo">
                <img className="logo-img" src={LOGO_URL} />
            </div>
            <div className="nav-bar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            <button className='login' onClick={()=>{btnName ==='Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
            </ul>

            </div>
        </div>
    )
}

export default Header;