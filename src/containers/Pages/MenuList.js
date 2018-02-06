import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ListItem } from './../../components'

class MenuList extends Component { 
    constructor(props, context){
        super(props, context);

        this.onGetSessionHandler = this.onGetSessionHandler.bind(this);
        this.onSetSessionHandler = this.onSetSessionHandler.bind(this);
    }

    onGetSessionHandler(){
        this.props.getSessionHandler();
    }
    onSetSessionHandler(data){
        this.props.setSessionHandler( data );
    }

    componentWillUpdate( nextProps, nextState ){
        console.log("[nextProps.session.status]", nextProps.session.status, nextProps.session.data );
        if( nextProps.session.status === "READY" ) return false;
        if( nextProps.session.status === "RUNNING" ) return false;
        // if( JSON.stringify(nextProps) !== JSON.stringify(this.props) ) return true;
        // if( JSON.stringify(nextState) !== JSON.stringify(this.state) ) return true;
        return true;
    }

    render(){
        return (
            <ul className="menu_list">
                <li><a onClick={ (event)=>{ this.onGetSessionHandler() } } >getSession</a></li>
                <li><a onClick={ (event)=>{ this.onSetSessionHandler({"username":"Heo"}) } } >setSession</a></li>
                <ListItem className="main_link" to={"/"} active={ '' }>Home</ListItem>
                <ListItem className="main_link" to={"/page1"} active={ '' }>Page1</ListItem>
                <ListItem className="main_link" to={"/page2"} active={ '' }>Page2</ListItem>
                <ListItem className="main_link" to={"/page/3"} active={ '' }>Page3</ListItem>
                <ListItem className="main_link" to={"/page/4"} active={ '' }>Page4</ListItem>
            </ul>
        );
    }
}
MenuList.contextTypes = {
    router: PropTypes.object
}
MenuList.defaultProps = {
    location: "MenuList"
}

import { SessionAct } from './../../actions'
const mapStateToProps = ( state )=>{
    return {
        session:{
            status: state.SessionReducer.status,
            data: state.SessionReducer.data
        }
    }
}
const mapDispatchToProps = ( dispatch )=>{
    return {
        getSessionHandler: ()=>{ dispatch( SessionAct.getSession() ); },
        setSessionHandler: ( data )=>{ dispatch( SessionAct.setSession(data) ); },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuList);
