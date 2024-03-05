import { useState } from "react"
import { Auth } from "../firebase/config"

export const UseLogin = () => {
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    const login = async (email, password, setUser) => {
        try {
            setError(null)
            setLoader(true)
            const request = await Auth.signInWithEmailAndPassword(email, password)
            setLoader(false)
            setUser(request.user)
        } catch (err) {
            setError(err.message)
            setLoader(false)
        }
    }
    return { loader, error, login }
}