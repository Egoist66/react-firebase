import {FC} from "react";
import {Form} from "./Form.tsx";
import {useSubmit} from "../hooks/useSubmit.ts";

export type HandleLoginProps = {
    email: string
    password: string
}

export const SignUp: FC = () => {

    const {handleRegister, isSubmitting} = useSubmit()

    return (
        <Form name={isSubmitting ? 'Signing Up...' : 'Sign Up'} onSubmitHandler={handleRegister}/>
    )
}