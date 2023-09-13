import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{

    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [filterdRestaurants,setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

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
        filterdRestaurants && filterdRestaurants.map((restaurant)=> (<Card key={restaurant?.info.id} resData = {restaurant?.info}/>))
       }
        </div>

        </div>
    )
}

export default Body;