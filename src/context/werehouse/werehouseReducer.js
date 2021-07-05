const handlers = {
    DEFAULT: state => state
}

export const werehouseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}