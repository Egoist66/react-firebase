import {useAppSelector} from "../store";

export const useAuth = () => {
    const {
        email,
        id,
        token
    }
    = useAppSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}