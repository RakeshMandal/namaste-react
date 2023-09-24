import { useEffect } from "react";
import UserClass from "./UserClass";

const About = () =>{
    useEffect(()=>{
        //api called
        console.log("component Did Mount");
        //update out DOM ( HTML will be updated)
        console.log("Component Did Update");
        //when we call return (when we go to other component from About page)
        return() =>{
            console.log("Component Will Unmount")
        }
           
        
        
    },[]);
    

    return(
        <div>
            <h1>About Us Page</h1>
            <h3>Namaste React Router Dom</h3>
            <UserClass name={"Rakesh Kumar Mandal"} location={"HSR Layout"}/>
        </div>
    )
}

export default About;