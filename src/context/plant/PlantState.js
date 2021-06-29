import React from "react"
import { PlantContext } from "./plantContext"

export const PlantsState = ({children}) => {
    const initialState={
        plants: {
            
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <PlantContext.Provider value={{}}>
            {children}
        </PlantContext.Provider>
    )
}