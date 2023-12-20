import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
              );
        
              if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                  ...state.cartItems[existingIndex],
                  cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
                };
                toast.info("Increased product quantity", {
                  position: "bottom-left",
                });
              } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
                toast.success("Product added to cart", {
                  position: "bottom-left",
                });
              }
              localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        decreaseItem(state, action) {
          const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
    
          if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
    
            toast.info("Decreased product quantity", {
              position: "bottom-left",
            });
          } else if (state.cartItems[itemIndex].cartQuantity === 1) {
            const nextCartItems = state.cartItems.filter(
              (item) => item.id !== action.payload.id
            );
    
            state.cartItems = nextCartItems;
    
            toast.error("Product removed from cart", {
              position: "bottom-left",
            });
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
          state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              const nextCartItems = state.cartItems.filter(
                (item) => item.id !== cartItem.id
              );
    
              state.cartItems = nextCartItems;
    
              toast.error("Product removed from cart", {
                position: "bottom-left",
              });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            return state;
          });
        },
    },
});

const { actions, reducer } = cartSlice;
export const { addItem, decreaseItem,removeFromCart } = actions;
export default cartSlice.reducer;