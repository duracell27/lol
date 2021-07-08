import { ADD_TO_WEREHOUSE } from "../types"

const handlers = {
    [ADD_TO_WEREHOUSE]: (state, {newObj})=> ({...state, werehouse: newObj}),
    DEFAULT: state => state
}

export const werehouseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}