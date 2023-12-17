import {FC} from "react";
import {Form} from "./Form.tsx";
import {useSubmit} from "../hooks/useSubmit.ts";

export type HandleLoginProps = {
    email: string
    password: string
}

export const Login: FC = () => {

    const {handleLogin, isSubmitting} = useSubmit()


    return (
        <Form name={isSubmitting ? 'Signing in...' : 'Sign In'} onSubmitHandler={handleLogin}/>
    )
}