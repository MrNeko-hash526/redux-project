import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [], // Array to store items in the cart
  totalQuantity: 0, // Total number of items in the cart
  totalPrice: 0, // Total price of items in the cart
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id)

      if (existingItem) {
        existingItem.quantity += 1
        existingItem.totalPrice += item.price
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        })
      }

      state.totalQuantity += 1
      state.totalPrice += item.price
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload
      const existingItem = state.cartItems.find(cartItem => cartItem.id === itemId)

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity
        state.totalPrice -= existingItem.totalPrice
        state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId)
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload
      const existingItem = state.cartItems.find(cartItem => cartItem.id === itemId)

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
          existingItem.totalPrice -= existingItem.price
          state.totalQuantity -= 1
          state.totalPrice -= existingItem.price
        } else {
          state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId)
          state.totalQuantity -= 1
          state.totalPrice -= existingItem.price
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },
  },
})

export const { addItemToCart, removeItemFromCart, decreaseItemQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer