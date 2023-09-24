import { useContext, useEffect, useState } from 'react';
import {LOGO_URL} from '../utils/constant'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () =>{

    const [btnName,setBtnName] = useState('Login');

    useEffect(()=>{
        console.log("UseEffect Called")
    },[btnName]);

    const onlineStatus = useOnlineStatus();
    const loginedUser = useContext(UserContext)
    return(
        <div className="flex justify-between items-center shadow-lg m-2 bg-green-100 sm:bg-gray-100">
            <div className="logo">
                <img className="w-48" src={LOGO_URL} />
            </div>
            <div className="nav-bar">
            <ul className='flex p-5 m-5'>
                <li className='px-2 text-lg'>{onlineStatus? "Online Status: ✅" : "Online Status:🔴"}</li>
                <li  className='px-2 text-lg'><Link to="/">Home</Link></li>
                <li  className='px-2 text-lg'><Link to="/about">About Us</Link></li>
                <li  className='px-2 text-lg'><Link to="/contact">Contact Us </Link></li>
                <li  className='px-2 text-lg'><Link to="/grocery">Grocery </Link></li>
                <li  className='px-2 text-lg'>Cart</li>
            <button className='px-2 text-lg' onClick={()=>{btnName ==='Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
            <li  className='px-2 text-lg'>{loginedUser}</li>
            </ul>

            </div>
        </div>
    )
}

export default Header;