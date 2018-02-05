import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Page3 extends Component { 
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>Page3</h1>
        );
    }
}
Page3.defaultProps = {
    location: "Page3"
}
export default Page3