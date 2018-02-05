import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ListItem } from './../components'

class Home extends Component { 
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
                <ListItem className="main_link" to={"/"} active={ this.context.router.isActive("/", true) }>Home</ListItem>
                <ListItem className="main_link" to={"/page1"} active={ this.context.router.isActive("/page1") }>Page1</ListItem>
                <ListItem className="main_link" to={"/page2"} active={ this.context.router.isActive("/page2") }>Page2</ListItem>
            </ul>
        );
    }
}
Home.contextTypes = {
    router: PropTypes.object
}
Home.defaultProps = {
    location: "Home"
}
import { 
    getSession, 
    setSession 
} from './../actions'

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
        getSessionHandler: ()=>{ dispatch( getSession() ); },
        setSessionHandler: ( data )=>{ dispatch( setSession(data) ); },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);