import { ADD_FIELD, SET_DEFAULT_MANUR, SET_DEFAULT_PLANT } from "../types"

const handlers = {
    [SET_DEFAULT_PLANT]: (state, {activePlant})=>({...state, defPlant: activePlant}),
    [SET_DEFAULT_MANUR]: (state, {activeManur})=>({...state, defManuring: activeManur}),
    [ADD_FIELD]: (state, {exp})=>({...state, exp: state.exp + exp}),
    DEFAULT: state => state
}

export const globalReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT

    return handle(state, action)
}