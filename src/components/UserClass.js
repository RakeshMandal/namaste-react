import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    
    render(){
        const {name,location}=this.props;
        const{count} = this.state;

        return(
            <div className="user-class">
            <h1>Count: {count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count +1
                })
            }} >Count Increase</button>
            <h1>Name: {name}</h1>
            <h2>Address: Bangalore {location}</h2>
            <h3>Contact: @itsrakeshmandal</h3>
            </div>
        )
    }
}

export default UserClass;