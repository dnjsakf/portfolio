import React from 'react'
import style from './SlideNav.css'

const defaultProps = { pages: 0 }

const SlideNavItem = ( { page, active } )=>{
    return (
        <li className={`slide_nav ${ page } ${ active ? 'active': '' }`}>
            <a href="#"></a>
        </li>
    )
}
const SlideNav = ( { parentOffset, direction, pages, activePage } )=>{
    const items = new Array(pages).fill(0).map((_, page)=>{
        return ( 
            <SlideNavItem 
                    key={page}    
                    page={page} 
                    active={ page === activePage }/> 
        );
    });

    // Set InlineStyle
    let inlineStyle = {}
    if( direction === 'center'){
        inlineStyle.left = ( (parentOffset.width/2) - ( items.length / 2 * 25 ) )+"px";
    } else if ( direction === 'right' ){
        inlineStyle.top = ( (parentOffset.height/2) - ( items.length / 2 * 25 ) )+"px";
    }

    // Render
    return (
        <ul className={`SideNav ${direction}`} style={inlineStyle}>
            { items }
        </ul>
    )
}

SlideNav.defaultProps = defaultProps;

export default SlideNav