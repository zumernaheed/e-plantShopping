import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        })
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      )
    },

    // Required reducer for the assignment rubric.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload

      const itemToUpdate = state.items.find(
        (item) => item.name === name
      )

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
      }

      if (quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.name !== name
        )
      }
    },
  },
})

export const {
  addItem,
  removeItem,
  updateQuantity,
} = CartSlice.actions

export default CartSlice.reducer
