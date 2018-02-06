import React, { Component, PropTypes } from 'react'
import { ImageSlider } from './../../components/Slider'
import { SlideNav } from './../../components/Navigation'

class Page1 extends Component { 
    constructor(props){
        super(props);
        this.state = {
            mounted: false,
            currentPage: 0,
            slideImages:[
                'https://vnasmtowndev.smtown.com/pc/issue/issue_12292.jpg',
                'https://vnasmtowndev.smtown.com/pc/issue/issue_12291.jpg',
                'https://vnasmtowndev.smtown.com/pc/issue/issue_12281.jpg',
                'https://vnasmtowndev.smtown.com/pc/issue/issue_12273.jpg',
                'https://vnasmtowndev.smtown.com/pc/issue/issue_12272.jpg'
            ]
        }
    }
    componentDidMount(){
        this.setState( Object.assign({}, this.state, { mounted: true }) );
    }
    componentWillUpdate(nextProps, nextState){
        console.log("[mounted]", this.state.mounted, nextState.mounted );
        return true;
    }
    render(){
        const pId = "slider";
        let Slider = []
        if( this.state.mounted ){
            const parent = document.getElementById(pId);
            const parentOffset = {
                width: parent.offsetWidth,
                height: parent.offsetHeight
            }
            Slider = [
                <ImageSlider
                    key={0} 
                    parentOffset={ parentOffset }
                    activePage={this.state.currentPage}
                    imageURLs={ this.state.slideImages } />
                ,
                <SlideNav
                    key={1}
                    direction="right" 
                    parentOffset={ parentOffset }
                    pages={ this.state.slideImages.length } 
                    activePage={ this.state.currentPage } />
            ];

            console.log( Slider[0].width, Slider[0].height );
        }
        return (
            <div id="slider" className="Page1" >
                <div className="slide_wrapper" 
                    style={{width: "100%", height: "100%", position:"relative"}}>
                    { this.state.mounted ? Slider : null }
                </div>
            </div>
        );
    }
}
Page1.defaultProps = {
    location: "Page1"
}
export default Page1