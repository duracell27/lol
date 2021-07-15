import { useCallback, useState } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)

    const request = useCallback(async (url, method = 'GET', body=null, headers={})=>{
        setLoading(true)
        try {
            const response = await fetch(url, {
                method, body, headers
            })
            const data = await response.json()
            if(!response.ok){
                throw new Error(data.message || 'fetch error')
            }
            setLoading(false)
            return data
        } catch (error) {
            setLoading(false)
            setErrors(error.message)
            throw error
        }
    },[])

    const clearError = () => setErrors(null)

    return {loading, errors, request, clearError}
}