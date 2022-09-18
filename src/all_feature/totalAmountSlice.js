import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalAmount : []
}

const totalAmountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        setTotalAmount: (state, action) => {
            state.totalAmount.push(action.payload)
        }
    }
});

export const { setTotalAmount } = totalAmountSlice.actions

export const getAmount = state => state.amount.totalAmount

export default totalAmountSlice.reducer