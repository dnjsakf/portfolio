import { SlideAct } from './../actions'

const initState = {
    maxPage: 0,
    currentPage: 0
}

export default function SlideReducer( state = initState, action ){
    let page = state.currentPage;
    console.log("[red]", page, state.maxPage );
    switch( action.type ){
        case SlideAct.types.SLIDE_INCREASE:
            return Object.assign( {}, state, { 
                currentPage: ( page+1 > state.maxPage ? 0 : page+1 )
            });
        case SlideAct.types.SLIDE_DECREASE:
            return Object.assign( {}, state, { 
                currentPage: ( page-1 < 0 ? state.maxpage : page-1 )
            });
        case SlideAct.types.SLIDE_DIRECT:
            return Object.assign( {}, state, { 
                currentPage: action.value
            });
        default:
            return state;
    }
}