import React, { Component, PropTypes } from 'react'

class SwitchPage extends Component { 
    constructor(props, context){
        super(props, context);
    }
    render(){
        return (
            <h1>SwitchPage {this.props.match.params.pageNumber}</h1>
        );
    }
}
SwitchPage.defaultProps = {
    location: "SwitchPage"
}
export default SwitchPage