import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeItemFromCart,
  decreaseItemQuantity,
  addItemToCart,
  clearCart,
} from '../features/shopCart/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart)

  const handleRemoveItem = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id)
    dispatch(removeItemFromCart(id))
    alert(`${item.title} has been removed from your cart!`) // Alert notification
  }

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseItemQuantity(item.id))
  }

  const handleIncreaseQuantity = (item) => {
    dispatch(addItemToCart(item))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
    alert('Your cart has been cleared!') // Alert notification
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center text-lg mt-10 text-gray-500">
        <p>Your cart is empty.</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="grid grid-cols-1 gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-700 p-4 rounded-lg shadow-lg bg-gray-800 flex items-center justify-between"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain rounded-lg"
            />
            <div className="flex-1 ml-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400">Price: ${item.price}</p>
              <p className="text-gray-400">Total: ${item.totalPrice.toFixed(2)}</p>
              <div className="flex items-center mt-4">
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-600"
                >
                  -
                </button>
                <span className="mx-4 text-lg">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-600"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Cart Summary</h2>
        <p className="text-lg mb-2">Total Items: <span className="font-semibold">{totalQuantity}</span></p>
        <p className="text-lg mb-4">Total Price: <span className="font-semibold">${totalPrice.toFixed(2)}</span></p>
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 w-full"
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}

export default Cart