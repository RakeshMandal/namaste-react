import ItemList from "./ItemList";

const RestaurantCategory = ({data,listItem,setShowIndex,dummy}) =>{

    const clickHandler = ()=>{
        setShowIndex()
        console.log(setShowIndex)
    };
    const arrowPoint = {
        transform: 'rotate(180deg)'
    };
   
// this is controlled component, because it is controlled by it's parent (RestaurantMenue)
    return(
        <div>
        {/* {accordian header} */}
        <div className="my-4 p-3 shadow-lg bg-gray-100 cursor-pointer rounded-lg">
            <div className="flex justify-between" onClick={clickHandler}>
            <span className="text-lg font-bold">{data.title} ({data.itemCards.length})</span>
            <span className={arrowPoint}>⬇️</span>
            </div>
           {listItem &&  <ItemList items={data.itemCards} dummy ={dummy} />}
        </div>
       
        {/* {accordian iteams} */}
        </div>
    )
}
export default RestaurantCategory;