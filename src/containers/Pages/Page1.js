import React from 'react'

import { ImageSlider } from './../../components/Slider'
import { SlideNav } from './../../components/Navigation'

class Page1 extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            mounted: false,
            maxPage: 4,
            currentPage: 0,
            slideImages:[
                'https://vnasmtowndev.smtown.com/pc/issue/issue_12292.jpg',
                'https://vnasmtowndev.smtown.com/pc/issue/issue_12291.jpg',
                'https://vnasmtowndev.smtown.com/pc/issue/issue_12281.jpg',
                'https://vnasmtowndev.smtown.com/pc/issue/issue_12273.jpg',
                'https://vnasmtowndev.smtown.com/pc/issue/issue_12272.jpg'
            ]
        }
        this.onMovePage = this.onMovePage.bind(this);
        this.onAuto = this.onAuto.bind(this);
    }
    onMovePage( event ){
        let currentPage = this.state.currentPage;
        // MouseWHeelEvent
        if( event.type === 'wheel' ){
            event.preventDefault();
            if( event.deltaY > 0 ){
                // Down -> Move To Right
                currentPage += 1;
                if( currentPage > this.state.maxPage ) currentPage = 0;
            } else {
                // Up -> Move To Left
                currentPage -= 1;
                if( currentPage < 0 ) currentPage = this.state.maxPage;
            }
        } else {
            currentPage = event;
        }
        this.setState( Object.assign({}, this.state, {currentPage: currentPage}));
    }
    onAuto(){

    }
    componentDidMount(){
        this.setState( Object.assign({}, this.state, { mounted: true }) );
    }
    componentWillUpdate(nextProps, nextState){
        console.log("[mounted]", this.state.mounted, nextState.mounted );
        console.log("[currenPage]", this.props.currentpage, nextProps.currentPage)
        return true;
    }
    render(){
        const pId = "slider";
        let SliderContainer = null;
        if( this.state.mounted ){
            const parent = document.getElementById(pId);
            const parentOffset = {
                width: parent.offsetWidth,
                height: parent.offsetHeight
            }
            SliderContainer=[
                <ImageSlider
                    key={0}
                    parentOffset={ parentOffset }
                    activePage={ this.state.currentPage }
                    imageURLs={ this.state.slideImages }
                    onMovePage={ this.onMovePage } />
                ,
                <SlideNav
                    key={1}
                    direction="vertical" // center or right
                    parentOffset={ parentOffset }
                    maxPage={ this.state.maxPage } 
                    activePage={ this.state.currentPage } 
                    onMovePage={ this.onMovePage } />
            ]
        }
        return (
            <div id="slider">
                { SliderContainer }
            </div>
        );
    }
}
Page1.defaultProps = {
    location: "Page1"
}
export default Page1