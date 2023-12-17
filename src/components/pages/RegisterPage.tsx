import {FC} from "react";
import {useHeadTitle} from "../../hooks/useHeadTitle.ts";
import {Link} from "react-router-dom";
import {SignUp} from "../SignUp.tsx";

export const RegisterPage: FC = () => {
    useHeadTitle(() => 'Register')

    return (
        <div>
            <h1>Register</h1>
            <div>
                Already have an account?
                <p><Link to={'/login'}>Sign in</Link></p>

            </div>

            <SignUp />


        </div>
    )
}