import {configureStore} from '@reduxjs/toolkit';
import exampleReducer from './slices/globalSlice.ts';
import authReducer from './slices/authSlice.ts';
import cartReducer from './slices/cartSlice';

const store = configureStore({
    reducer: {
        example: exampleReducer,
        auth: authReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
