import {FC} from "react";
import {Redirect} from "react-router-dom";
import {useHeadTitle} from "../../hooks/useHeadTitle.ts";
import {useAuth} from "../../hooks/useAuth.ts";
import {useAppDispatch} from "../../store";
import {removeUser} from "../../store/slices/userSlice.ts";

export const HomePage: FC = () => {
    const dispatch = useAppDispatch()
    useHeadTitle(() => 'Home')
    const {isAuth, email} = useAuth()

    return (
        <div>
            {
                isAuth ? (
                    <>
                        <h1>Welcome to Home page</h1>
                        <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
                    </>
                ) : (
                    <Redirect to={'/login'} />
                )
            }


        </div>
    )
}