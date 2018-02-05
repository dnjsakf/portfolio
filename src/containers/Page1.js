import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Page1 extends Component { 
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>Page1</h1>
        );
    }
}
Page1.defaultProps = {
    location: "Page1"
}
export default Page1