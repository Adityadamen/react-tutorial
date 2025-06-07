import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor")

    }
    componentDidMount(){
        console.log("Child Component Did Mount")
    }
    componentDidUpdate(){
       console.log("will update ")
    }
    componentWillUnmount(){
        console.log("will un mount")
    }
    render()
    {
        console.log("Parent Render")
        return (
            <div>
                <h1>About</h1>
                <h2>This about us componenet</h2>
    
                <UserClass name={"Aditya the {great}"}/>
            </div>
        ) 
    }
}
/*
- parent CQonstructor
*/


export default About;