import Card, {withPrometedLable} from "./Card";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import GET_RESTAURANT_URL from './Config'

const Body = () =>{

    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [filterdRestaurants,setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();
    const RestaurantWithPromoted = withPrometedLable(Card);

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListOfRestaurant( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    // conditional Rendering
    // if(listOfRestaurant.length === 0){
    //     return <Shimmer />
        
    // }
        if(onlineStatus === false)return(
            <h1>It's look like you are Offline, Please check your internet connection!!</h1>
        )
        //const {loginedUser, setUserName} = useContext(UserContext)
    return listOfRestaurant?.length === 0 ? <Shimmer /> : (
        <div className="res-main-container">
        <div className="flex items-center">
        <div className="search ">
        <input type="text" className=" border border-solid border-black " value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
        }}/>
        <button className=" bg-green-100 px-4 py-2 m-4 rounded-lg" onClick={()=>{
            const filterdRestaurant = listOfRestaurant.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filterdRestaurant);
        }}>Search</button>

        </div>
        <div>
        <button className=" bg-gray-100 px-4 py-2 m-4 rounded-lg" onClick={()=>{
            const filteredRes = listOfRestaurant.filter((res)=>res.info.avgRating>4);
            setFilteredRestaurant(filteredRes);
        }}>Top Rated Restaurant</button>
        </div>
        {/* <div>
        <label>User Name: </label>
        <input value={loginedUser}  className="border border-black p-2" onChange={(e)=>setUserName(e.target.value)}/>
        </div> */}
        
        </div>
        <div className=" flex flex-wrap">
       {
        filterdRestaurants && filterdRestaurants.map((restaurant)=> (
            <Link to={"/restaurants/"+restaurant?.info.id} key={restaurant?.info.id}>
            {restaurant.info.promoted ? (
                <RestaurantWithPromoted resData = {restaurant?.info}/>
            ): ( <Card  resData = {restaurant?.info}/>)}
           </Link>
            ))
       }
        </div>

        </div>
    )
}

export default Body;