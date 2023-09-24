import {CDN_URL} from '../utils/constant';
import {starSvg} from '../images/ImagesSvgs'
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Card = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData;
    const loginedUser = useContext(UserContext)
    return(
        <div className=" scroll-class p-4 m-4 w-[250px] bg-gray-100 rounded-lg hover:scale-95 "> 
           <div className='res-card-logo'> <img alt="card-logo" className=" rounded-lg w-[100%] h-[200px] object-cover" src={CDN_URL+ cloudinaryImageId} /></div>
           <div className='h-[200px] overflow-y-auto'>
            <h3 className=' text-lg font-bold py-3'>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p className=' flex text-center'> <span>{starSvg}</span> <span className='mx-1'>{avgRating}</span></p>
            <p>{costForTwo}</p>
            <p>{deliveryTime} minutes</p>
            <p>User: {loginedUser}</p>
           
           </div>

        </div>
    )
}

//High Order Component

export const withPrometedLable = (Card) =>{
    return(props)=>{
        return(
            <div>
                <label className='promoted-lavel'>Promoted</label>
                <Card {...props}/>
            </div>
        )
    }
}

export default Card