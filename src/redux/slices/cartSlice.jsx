import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems  : [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name : "cart",
    initialState: initialState,
    reducers: {
        addToCart(state, action){
            const item = action.payload;
            const checkItem = state.cartItems.find(product => product.product.id === item.product.id);
            if(checkItem){
             checkItem.quantity += 1; 
            }
            else{
                state.cartItems.push({...item, quantity: 1});
            }
            state.totalQuantity = state.cartItems.length;
        },
        removeFromCart(state, action){
            const item = action.payload;            
            const itemFind = state.cartItems.find(product => product.product.id === item.id);
            if(itemFind.quantity > 1){
                itemFind.quantity -= 1; 
            }
            else{
                state.cartItems = state.cartItems.filter(product => product.product.id !== item.id)
            }
            if(itemFind){
                state.totalQuantity = state.cartItems.length;
            }
            console.log("Cart Items:", JSON.parse(JSON.stringify(state.cartItems)));
        }
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;