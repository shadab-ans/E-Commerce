import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartList: []
}

const addCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartList: (state, action) => {
            state.cartList.push(action.payload)
            // console.log(action.payload)
        }
    }
});

export const { setCartList } = addCartSlice.actions

export const getCartList = (state) => state.cart.cartList

export default addCartSlice.reducer