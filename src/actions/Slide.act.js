export const types = {
    SLIDE_INCREASE: "SLIDE_INCREASE",
    SLIDE_DECREASE: "SLIDE_DECREASE",
    SLIDE_DIRECT: "SLIDE_DIRECT"
}
export function increase( current ){
    return { type: types.SLIDE_INCREASE, current: current }
}
export function decrease( current ){
    return { type: types.SLIDE_DECREASE, current: current }
}
export function direct( page ){
    return { type: types.SLIDE_DIRECT, page: page }
}

/**
 * State가 있어야 되는 단일 컴포넌트에서 보내니까 노답인듯..
 */