import React from 'react'

import './ImageSlider.css'

const defaultProps = {
    currentPage: 1,
    imageURLs: []
}
const SliderItem = ( { page, url, active, size } )=>{
    const SliderItemStyle = {
        background: `url(${url}) no-repeat center / cover`,
        width: `${size.width}px`,
        height: `${size.height}px`
    }
    return (
        <div className={`SliderItem ${page} ${active ? 'active' : ''}` } 
            style={SliderItemStyle}>
        </div>
    )
}
const ImageSlider = ( { parentOffset, activePage, imageURLs, onMovePage })=>{
    const items = imageURLs.map((url, page)=>{
        return (
            <SliderItem 
                key={page}
                page={page} 
                active={ activePage === page } 
                url={url}
                size={parentOffset}/>
        );
    });
    const wrapperSize = {
        height: `${parentOffset.height}px`,
        width: `${items.length*101}%`,
    }
    return (
        <div className="ImageSlider" onWheel={ event=>onMovePage(event) }>
            <div className="SliderWrapper" style={wrapperSize}>
                { items }
            </div>
        </div>
    )
}

ImageSlider.defaultProps = defaultProps;

export default ImageSlider