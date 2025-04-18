import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async thunk to fetch products from the API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data
})

const initialState = {
  products: [], // Array to store product data
  status: 'idle', // Status of the fetch request ('idle', 'loading', 'succeeded', 'failed')
  error: null, // Error message if the fetch fails
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default productSlice.reducer