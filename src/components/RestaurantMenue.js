import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenue from "../utils/useRestaurantMenue";
const RestaurantMenue = () =>{
    const {resId} = useParams();

    const resInfo = useRestaurantMenue(resId);
    
 
    
    if(resInfo === null) return <Shimmer />

    const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return(
        <div className="resturant-container">
        <h1>{name}</h1>
        <p>{cuisines.join(",")} - {costForTwoMessage}</p>
        <div className="rest-menu">
        <h2>Menu</h2>
        <ul>
        {itemCards.map((resMenu)=><li key={resMenu?.card?.info?.id}>{resMenu?.card?.info?.name}  {"RS. "} - {resMenu?.card?.info?.defaultPrice / 100 || resMenu?.card?.info?.price / 100}</li>)}
            
        </ul>
        </div>

        </div>
    )
}

export default RestaurantMenue;