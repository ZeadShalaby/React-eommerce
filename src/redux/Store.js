import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../views/Cart/CartSlice';


const rootReducer = {
    cart: cartReducer
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;