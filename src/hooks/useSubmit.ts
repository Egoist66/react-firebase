import {useState} from "react";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {HandleLoginProps} from "../components/Login.tsx";
import {useAppDispatch} from "../store";
import {setUser} from "../store/slices/userSlice.ts";
import {useHistory} from "react-router-dom";

export const useSubmit = () => {
    const dispatch = useAppDispatch()
    const {push} = useHistory()
    const [state, setState] = useState<{isSubmitting: boolean}>({
        isSubmitting: false
    })

    const handleLogin = () => {
        return async ({password, email}: HandleLoginProps) => {
            setState({isSubmitting: true})
            const auth = getAuth()
            try {
                const {user} = await signInWithEmailAndPassword(
                    auth,
                    email.trim().toLowerCase(),
                    password.trim()
                )

                console.log(user)
                setState({isSubmitting: false})
                dispatch(setUser({
                    email: user.email ? user.email : '',
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    token: user.accessToken,
                    id: user.uid
                }))

                push('/')

            }
            catch (e){

                setState({isSubmitting: false})
                console.log(e)
                alert('User does not exist or wrong credentials')
            }

        }

    }

    const handleRegister  = () => {
        return async ({password, email}: HandleLoginProps) => {
            setState({isSubmitting: true})
            const auth = getAuth()
            try {
                const {user} = await createUserWithEmailAndPassword(
                    auth,
                    email.trim().toLowerCase(),
                    password.trim()
                )

                console.log(user)

                setState({isSubmitting: false})
                dispatch(setUser({
                    email:  user.email ? user.email : '',
                    id: user.uid,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    token: user.accessToken
                }))
                push('/')
            }
            catch (e){

                setState({isSubmitting: false})
                console.log(e)
                alert('User does not exist or wrong credentials')
            }

        }


    }

    return {
        handleLogin,
        handleRegister,
        ...state
    }
}