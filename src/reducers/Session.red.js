import { SessionAct } from './../actions'

const initializeState = {
    status: "READY",
    data: {}
}
export default function SessionReducer(state = initializeState, action){
    switch( action.type ){
        case SessionAct.types.SESSION_RUNNING:
            return Object.assign( {}, state, {
                status: "RUNNING",
            });
            break;
        case SessionAct.types.SESSION_SUCCESS:
            return Object.assign( {}, state, {
                status: "SUCCESS",
                data: action.data
            });
            break;
        case SessionAct.types.SESSION_FAILURE:
            return Object.assign( {}, state, {
                status: "FAILURE"
            });
            break;
        default:
            return state;
    }
}
