import React from 'react'
import './SlideNav.css'

const defaultProps = { pages: 0 }

const SlideNavItem = ( { page, active, onMovePage } )=>{
    return (
        <li className={`slide_nav ${ page } ${ active ? 'active': '' }`}>
            <a href={`#${page}`} onClick={ ()=>onMovePage(page) } ></a>
        </li>
    )
}
const SlideNav = ( { parentOffset, direction, maxPage, activePage, onMovePage } )=>{
    const items = new Array(maxPage+1).fill(0).map((_, page)=>{
        return ( 
            <SlideNavItem 
                    key={page}    
                    page={page} 
                    active={ page === activePage }
                    onMovePage={ onMovePage }/> 
        );
    });

    // Set InlineStyle
    let inlineStyle = {}
    if( direction === 'vertical'){
        inlineStyle.left = ( (parentOffset.width/2) - ( items.length / 2 * 25 ) )+"px";
    } else if ( direction === 'horizontal' ){
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