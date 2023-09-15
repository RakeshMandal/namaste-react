import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{

    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [filterdRestaurants,setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListOfRestaurant( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // conditional Rendering
    // if(listOfRestaurant.length === 0){
    //     return <Shimmer />
        
    // }

        if(onlineStatus === false)return(
            <h1>It's look like you are Offline, Please check your internet connection!!</h1>
        )

    return listOfRestaurant?.length === 0 ? <Shimmer /> : (
        <div className="res-main-container">
        <div className="filter">
        <div className="search">
        <input type="text" className="search-txt" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
        }}/>
        <button className="search-btn" onClick={()=>{
            const filterdRestaurant = listOfRestaurant.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filterdRestaurant);
        }}>Search</button>

        </div>
        <button className="filter-btn" onClick={()=>{
            const filteredRes = listOfRestaurant.filter((res)=>res.info.avgRating>4);
            setFilteredRestaurant(filteredRes);
        }}>Top Rated Restaurant</button>
        
        </div>
        <div className="res-container">
       {
        filterdRestaurants && filterdRestaurants.map((restaurant)=> (
            <Link to={"/restaurants/"+restaurant?.info.id} key={restaurant?.info.id}><Card  resData = {restaurant?.info}/></Link>
            ))
       }
        </div>

        </div>
    )
}

export default Body;