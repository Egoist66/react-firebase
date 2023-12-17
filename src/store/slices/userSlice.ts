import {createSlice} from "@reduxjs/toolkit";
import {UserSliceActionType, UserSliceStateType} from "../../vite-env";


const initialState: UserSliceStateType = {
    email: null,
    token: null,
    id: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state: UserSliceStateType, action: UserSliceActionType){
            state.email = action.payload.email ? action.payload.email : null
            state.token = action.payload.token ? action.payload.token : null
            state.id = action.payload.id ? action.payload.id : null
        },

        removeUser(state: UserSliceStateType){
            state.email = null
            state.token = null
            state.id = null
        }
    }
})

export const {setUser, removeUser} = userSlice.actions

export  default  userSlice.reducer