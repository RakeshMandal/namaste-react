import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
const ItemList = ({items,dummy}) =>{


    const dispatch = useDispatch();
    const handleAddItems = (item) =>{
        //dispatch
        dispatch(addItem(item));
        console.log(item)
    }
    console.log(dummy);
    return(
        <div>
           {items.map((item)=>(
            <div key={item.card.info.id} className=" flex justify-between text-left p-2 border-b-2">
                <div className="w-9/12">
                <p className=" font-bold ">{item.card.info.name}</p>
                <p className=" font-bold text-sm">₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                <p className=" text-gray-600 my-2">{item.card.info.description}</p>
                </div>
                <div className=" w-3/12 relative">
                   <img src={CDN_URL+ item.card.info.imageId} className="w-full rounded-lg"/>
                    <button className=" bg-white  rounded-lg text-green-600 font-bold mx-auto absolute bottom-0 right-7 w-8/12 p-2 shadow-lg"
                     onClick={()=> handleAddItems(item)}>ADD</button>
                   </div>
            </div>
           ))}
        </div>
    )
}
export default ItemList;
