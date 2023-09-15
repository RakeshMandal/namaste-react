import { useEffect, useState } from "react";
import { RESMENU_API } from "./constant";

const useRestaurantMenue = (resId) =>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(RESMENU_API+resId);
        const json = await data.json();
        setResInfo(json)

    }
    return resInfo;

}
export default useRestaurantMenue;