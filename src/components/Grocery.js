import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () =>{
    const loginedUser = useContext(UserContext)
    return(
        <div>
            <h1>***This is Grocery Store and Here are Lots of Child components***!!!!!</h1>
            <h1 className="font-bold text-lg"> Logined User: {loginedUser}</h1>
        </div>
    )
}
export default Grocery;