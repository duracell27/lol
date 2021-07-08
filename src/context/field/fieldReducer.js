import { ADD_FIELD, CHANGE_ACTION_ID, SET_MANUR, SET_PLANT } from "../types"

const handlers = {
    [ADD_FIELD]: (state, {newField}) =>({...state, fields: [...state.fields, newField]}),
    [CHANGE_ACTION_ID]: (state, {changedFields}) =>({...state, fields: changedFields}),
    [SET_PLANT]: (state, {newFields}) =>({...state, fields: newFields}),
    [SET_MANUR]: (state, {newFields}) =>({...state, fields: newFields}),
    DEFAULT: state => state
}

export const fieldReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT

    return handle(state, action)
}