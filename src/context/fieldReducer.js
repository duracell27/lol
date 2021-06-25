import { ADD_FIELD } from "./types"

const handlers = {
    [ADD_FIELD]: (state) => ({fieldsCount: state.fieldsCount + 1}),
    DEFAULT: state => state
}

export const fieldReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT

    return handle(state, action)
}