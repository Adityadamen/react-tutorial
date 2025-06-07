import React from 'react'

class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(this.props.name+"children constructor");
        //console.log("Children constructor");
        this.state = {
            userInfo:{
                name: "Dummy",
                location:"Default",
            },
        };
    }

    async componentDidMount(){
        //console.log("Child Component Did Mount")

        ///api calls
        const data = await fetch ("https://api.github.com/users/Adityadamen");
        const json  = await data.json();
        console.log(json); 
        this.setState({
            userInfo:json,
        })
    }
   
    render(){
        //console.log("children render")
        //const {name} = this.props;
        const{name,bio} =  this.state.userInfo
        return ( 
            <div className='user-card'>
                <h2>Name: {name}</h2>
                <h3>Bio: {bio}</h3>
                <h4>Contact: 5451464</h4>
              
            </div>
          ); 
    }
}
export default UserClass;