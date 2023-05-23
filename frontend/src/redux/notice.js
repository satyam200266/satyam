import { createSlice } from "@reduxjs/toolkit"

const initiaState = {
    notice: null,
}

export const noticeSlice = createSlice({
    name: 'nitice',
    initialState: initiaState,
    reducers : {
        addNotice : (state, action) => {
            state.notice = action.payload;
        },
        deleteNotice : (state) => {
            state.notice = null
        },
    }
})

export const {addNotice, deleteNotice} = noticeSlice.actions;    
export default noticeSlice.reducer