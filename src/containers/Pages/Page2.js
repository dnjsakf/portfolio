import React, { Component, PropTypes } from 'react'

class Page2 extends Component { 
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>Page2</h1>
        );
    }
}
Page2.defaultProps = {
    location: "Page2"
}
export default Page2