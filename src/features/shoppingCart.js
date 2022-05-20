import { createAction, createReducer } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const addToCart = createAction('add to cart');
const removeFromCart = createAction('remove from cart');
const increaseAmount = createAction('increase amount');
const decreaseAmount = createAction('decrease amount'); 


const actions = { addToCart, removeFromCart, increaseAmount, decreaseAmount};
    
const initialState = []; 


const reducer = createReducer(initialState, {
    [addToCart]: (state, action) => {
        const found = state.find(cartItem => cartItem.product.name === action.payload.name);
        if (found) {
            // om produkten redan finns i vår kundvagn
            const newState = state.map(cartItem => {
                if (cartItem.product.name === action.payload.name) {
                    toast.info(`New quantity has been added`, {position: "bottom-center"})
                    return { ...cartItem, count: cartItem.count + 1 }
                } else {
                    return cartItem;
                }
            })
            return newState;
        } else {
            // om produkten inte finns redan
            toast.success(`${action.payload.name} has been added to cart`, {position: "bottom-center"});
            return [
                ...state,
                { product: action.payload, count: 1 }
            ]
        }
    },

    [increaseAmount] : (state, action) => ( 
        state.map(cartItem => {
            if (cartItem.product.name === action.payload.name) {
                return { ...cartItem, count: cartItem.count + 1}
            } else {
                return cartItem;
            }
        })
    ),

    // ToDo: om count blir 0 så borde objectewt tas bort
    [decreaseAmount] : (state , action ) => (
        state.map(cartItem => {
            if (cartItem.product.name === action.payload.name) {
                return { ...cartItem, count: cartItem.count - 1}
            } else {
                return cartItem;
            }
        })
    ),

    // [removeFromCart] : (state, action) => {
    //     let newstate = [];
    //     state.foreach(cartItem => {
    //         if (cartItem.product.name !== action.payload.name) {
    //             newstate.push(cartItem);
    //         }
    //     })
    //     return newstate;
    // }

    
        
    [removeFromCart] : (state, action ) => (
        
        state.filter(cartItem => cartItem.product.name !== action.payload.name)
    )    

});

export { actions, reducer };