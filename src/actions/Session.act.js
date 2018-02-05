import axios from 'axios'

export const sessionTypes = {
    SESSION_RUNNING: "SESSION_RUNNING",
    SESSION_SUCCESS: "SESSION_SUCCESS",
    SESSION_FAILURE: "SESSION_FAILURE"
}
export function getSession(){
    return ( dispatch )=>{

        dispatch({type: sessionTypes.SESSION_RUNNING})

        const request = axios.get("/auth/session");
        request.then((response)=>{
            dispatch({
                type: sessionTypes.SESSION_SUCCESS,
                data: response.data
            });
        });
        request.catch((error)=>{
            dispatch({
                type: sessionTypes.SESSION_FAILURE,
                data: error.response.data
            })
        });    
    }
}
export function setSession( data ){
    return ( dispatch )=>{

        dispatch({type: sessionTypes.SESSION_RUNNING})

        const request = axios.post("/auth/session", { data } );
        request.then((response)=>{
            dispatch({
                type: sessionTypes.SESSION_SUCCESS,
                data: response.data
            });
        });
        request.catch((error)=>{
            dispatch({
                type: sessionTypes.SESSION_FAILURE,
                data: error.response.data
            })
        });    
    }
}