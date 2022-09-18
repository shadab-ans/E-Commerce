import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recentlyData: []
}

const recentlySlice = createSlice({
    name: 'recently',
    initialState,
    reducers: {
        setRecently: (state, action) => {   
            state.recentlyData.push(action.payload)
        }
    }
});

export const {setRecently} = recentlySlice.actions

export const getRecentlyData = (state) => state.recently.recentlyData

export default recentlySlice.reducer