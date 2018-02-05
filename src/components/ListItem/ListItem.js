import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import './ListItem.css'

const ListItem = ({className, to, active, children })=>{
    return (
        <li>
            <Link to={ to } className={ `${className} ${active ? 'active': ''}` }>
                { children }
            </Link>
        </li>
    )
}
ListItem.contextTypes = {
    router: React.PropTypes.object
}
ListItem.defaultProps = {
    location: __dirname
}
export default ListItem