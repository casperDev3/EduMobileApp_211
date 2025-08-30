import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
    id: string | number;
    quantity: number;
    selected?: boolean;
} & any;

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const existingItem = state.items.find(i => i.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                    selected: true,
                });
            }
        },
        incrementQuantity: (state, action: PayloadAction<any>) => {
            const existingItem = state.items.find(i => i.id === action.payload);
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decrementQuantity: (state, action: PayloadAction<any>) => {
            const existingItem = state.items.find(i => i.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
        },
        removeItem: (state, action: PayloadAction<any>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        toggleSelectItem: (state, action: PayloadAction<any>) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                item.selected = !item.selected;
            }
        },
        toggleSelectAll: (state) => {
            const allSelected = state.items.every(item => item.selected);
            state.items.forEach(item => {
                item.selected = !allSelected;
            });
        },
    },
});

export const {
    addToCart,
    removeItem,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    toggleSelectItem,
    toggleSelectAll,
} = cartSlice.actions;

export default cartSlice.reducer;
