import { sessionTypes as types } from './../actions'

const initializeState = {
    status: "READY",
    data: {}
}
export default function SessionReducer(state = initializeState, action){
    switch( action.type ){
        case types.SESSION_RUNNING:
            return Object.assign( {}, state, {
                status: "RUNNING",
            });
            break;
        case types.SESSION_SUCCESS:
            return Object.assign( {}, state, {
                status: "SUCCESS",
                data: action.data
            });
            break;
        case types.SESSION_FAILURE:
            return Object.assign( {}, state, {
                status: "FAILURE"
            });
            break;
        default:
            return state;
    }
}
