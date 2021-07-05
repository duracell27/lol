import { useReducer } from "react"
import { WerehouseContext } from "./werehouseContext"
import { werehouseReducer } from "./werehouseReducer"

export const WerehouseState = ({children}) => {

    const initialState = {
        werehouse: []
    }

    const [state, dispatch] = useReducer(werehouseReducer, initialState)

    return (<WerehouseContext.Provider value={{
        werehouse: state.werehouse
    }}>
        {children}
    </WerehouseContext.Provider>)
}