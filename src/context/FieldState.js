import React, {useReducer}from 'react'
import { FieldContext } from './fieldContext'
import { fieldReducer } from './fieldReducer'

export const FieldState = ({children}) => {
    const initialState = {
        fieldsCount: 3
    }

    const [state, dispatch] = useReducer(fieldReducer, initialState)

    return (
        <FieldContext.Provider value={{fieldsCount: state.fieldsCount}}>
            {children}
        </FieldContext.Provider>
    )
}