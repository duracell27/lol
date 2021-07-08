import { ADD_EXP, ADD_GOLD, REMOVE_GOLD, SET_DEFAULT_MANUR, SET_DEFAULT_PLANT, SET_LVL_PERCENT, UP_LVL } from "../types"

const handlers = {
    [SET_DEFAULT_PLANT]: (state, {activePlant})=>({...state, defPlant: activePlant}),
    [SET_DEFAULT_MANUR]: (state, {activeManur})=>({...state, defManuring: activeManur}),
    [ADD_EXP]: (state, {newExp})=>({...state, exp: newExp}),
    [SET_LVL_PERCENT]: (state, {percent})=>({...state, lvlPercent: percent}),
    [UP_LVL]: (state)=>({...state, lvl: state.lvl + 1}),
    [ADD_GOLD]: (state, {gold})=>({...state, gold: state.gold + gold}),
    [REMOVE_GOLD]: (state, {gold})=>({...state, gold: state.gold - gold}),
    DEFAULT: state => state
}

export const globalReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT

    return handle(state, action)
}