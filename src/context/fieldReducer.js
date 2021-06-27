import { ADD_FIELD, CHANGE_ACTION_ID } from "./types"

const handlers = {
    [ADD_FIELD]: (state, {newField}) =>({...state, fields: [...state.fields, newField]}),
    [CHANGE_ACTION_ID]: (state, {changedFields}) =>({...state, fields: changedFields}),
    DEFAULT: state => state
}

export const fieldReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT

    return handle(state, action)
}