/// <reference types="vite/client" />


import {HandleLoginProps} from "./components/Login.tsx";

type UserSliceStateType = {
    email: string | null
    token: string | null
    id: string | null
}

type UserSliceActionType = {
    payload: {
        email?: string,
        token?: string
        id?: string
    }
}

type FormPropsType = {
    name: string
    onSubmitHandler: () => ({email, password}: HandleLoginProps) => void
}