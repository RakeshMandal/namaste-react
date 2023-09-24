import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenue from "../utils/useRestaurantMenue";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenue = () =>{
    const {resId} = useParams();
    //prop drilling example. We want to pass data from here to ItemList (that is the RestaurentCategory --> ItemList)
    const dummy = "Dummy Datas"

    const resInfo = useRestaurantMenue(resId);
    const [showIndex,setShowIndex] = useState(null);
    
    if(resInfo === null) return <Shimmer />

    const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories =  resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
    return(
        <div className="resturant-container text-center w-6/12 mx-auto my-4">
        <h1 className=" font-bold text-xl">{name}</h1>
        <p className="font-bold">{cuisines.join(",")} - {costForTwoMessage}</p>
        {/* {accordian} */}
        {/* controlled components */}
        {categories.map((category,index)=>
            <RestaurantCategory 
            key={category?.card?.card?.title} 
            data={category?.card?.card}
            listItem={index === showIndex ? true : false}
            setShowIndex ={()=>setShowIndex(index)}
            dummy={dummy}
            />
           
            
        )}
       
        </div>
    )
}

export default RestaurantMenue;