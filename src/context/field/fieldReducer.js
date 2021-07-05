import { ADD_FIELD, CHANGE_ACTION_ID, SET_PLANT_ID } from "../types"

const handlers = {
    [ADD_FIELD]: (state, {newField}) =>({...state, fields: [...state.fields, newField]}),
    [CHANGE_ACTION_ID]: (state, {changedFields}) =>({...state, fields: changedFields}),
    [SET_PLANT_ID]: (state, {plantDefId, fieldId}) =>{
        const newFields = [...state.fields]
        newFields[fieldId -1].plantId = plantDefId
        return {...state, fields: newFields }},
    DEFAULT: state => state
}

export const fieldReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT

    return handle(state, action)
}