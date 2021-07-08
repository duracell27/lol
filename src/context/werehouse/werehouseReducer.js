import { ADD_TO_WEREHOUSE } from "../types"

const handlers = {
    [ADD_TO_WEREHOUSE]: (state, {newObj})=> {
        const lol = {...state, werehouse: newObj}
        console.log('reducer new obj', newObj)
        console.log('reducer', lol)
        return{...state, werehouse: newObj}},
    DEFAULT: state => state
}

export const werehouseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}