import { createSlice } from "@reduxjs/toolkit"

const localStoreageUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];

const initiaState = {
    user: localStoreageUser,
}

const saveToLocalStorage = (state) => localStorage.setItem("user", JSON.stringify(state.user))


const withSaveToLocalStorage = (reducer) => {
    return (state, action) => {
        const newState = reducer(state, action);
        saveToLocalStorage(newState);
        return newState;
    }
}


export const userSlice = createSlice({
    name: 'user',
    initialState: initiaState,
    reducers : {
        login : (state, action) => {
            state.user = action.payload;
        },
        logout : (state) => {
            state.user = null
        },
    }
})

export const {login, logout} = userSlice.actions;    
export default withSaveToLocalStorage(userSlice.reducer);;