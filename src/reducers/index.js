import { combineReducers } from 'redux'

import SessionReducer from './Session.red.js'
import SlideReducer from './Slide.red.js'

export default combineReducers({
    SessionReducer,
    SlideReducer
});