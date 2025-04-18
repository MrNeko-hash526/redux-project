import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './app/store'
import Home from './components/Home'
import Layout from './components/Layout'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App