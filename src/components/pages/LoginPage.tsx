import {FC} from "react";
import {useHeadTitle} from "../../hooks/useHeadTitle.ts";
import {Link} from "react-router-dom";
import {Login} from "../Login.tsx";

export const LoginPage: FC = () => {
    useHeadTitle(() => 'Login')

    return (
        <div>
            <h1>Login</h1>

            <Login />

            <p>
                Or <Link to={'/register'}>Register now</Link>
            </p>
        </div>
    )
}