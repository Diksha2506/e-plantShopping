import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of { id, name, image, cost, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name || item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // Normalize cost to ensure it can be parsed (e.g. '$15' or 15)
        state.items.push({
          id: id || name,
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const identifier = action.payload; // can be item name or object or id
      const targetName = typeof identifier === 'object' ? (identifier.name || identifier.id) : identifier;
      state.items = state.items.filter(item => item.name !== targetName && item.id !== targetName);
    },
    updateQuantity: (state, action) => {
      const { name, id, quantity } = action.payload;
      const targetItem = state.items.find(item => item.name === name || (id && item.id === id));
      if (targetItem) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.name !== targetItem.name);
        } else {
          targetItem.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
