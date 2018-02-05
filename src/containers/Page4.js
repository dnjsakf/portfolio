import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Page4 extends Component { 
  constructor(props){
    super(props);
  }
  render(){
    return (
      <h1>Page4</h1>
    );
  }
}
Page4.defaultProps = {
  location: "Page4"
}
export default Page4