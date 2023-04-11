import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action, 'action.payload.id')
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0 && action.payload.quantity !== undefined) {
        state.items[index].quantity = action.payload.quantity;
      }
      else if (index >= 0) {
        state.items[index].quantity += 1;
      }  else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateItemQuantity: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.items[index].quantity = action.payload.quantity;
      }
    },
    increment: (state,action) => {
      console.log(action, 'action.payload.id')
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index >= 0) {
          state.items[index].quantity++;
        }
    },
    decrement: (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index >= 0 && state.items[index].quantity > 1) {
          state.items[index].quantity--;
        }
    }
  },
});

export const { addItem, removeItem, updateItemQuantity, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
