import {configureStore} from "@reduxjs/toolkit";
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {FC, ReactNode} from "react";
import userSliceReducer from './slices/userSlice.ts'

const store = configureStore({
    reducer: {
        user: userSliceReducer
    }
})


type AppReduxProvider = {
    children: ReactNode
}
export const AppReduxProvider: FC<AppReduxProvider> = ({children}) => {
    return (
        <Provider store={store}>
            {children}

        </Provider>
    )
}


type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;