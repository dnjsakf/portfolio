import React, { Component, PropTypes } from 'react'

class Home extends Component { 
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>Home</h1>
        );
    }
}
Home.defaultProps = {
    location: "Home"
}
export default Home