import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './app/store'
import Home from './pages/Home'
import Layout from './Layout/Layout'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import TermsOfService from './pages/Tos'
import PrivacyPolicy from './pages/Privacy'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Layout wraps all routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App