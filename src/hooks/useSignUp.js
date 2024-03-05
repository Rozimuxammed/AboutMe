import { useState } from "react"
import { Auth } from "../firebase/config"

export const UseSignUp = () => {
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    const signUp = async ({ name, email, password ,setUser }) => {
        try {
            setError(null)
            setLoader(true)
            const request = await Auth.createUserWithEmailAndPassword(email, password)
            await request.user.updateProfile({ displayName: name })
            setLoader(false)
            setUser(request.user)
        } catch (err) {
            setError(err.message)
            setLoader(false)

        }
    }
    return { loader, error, signUp }
}