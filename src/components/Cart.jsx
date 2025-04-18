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
    return <p className="text-center text-lg mt-10">Your cart is empty.</p>
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md flex items-center justify-between">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
              <p className="text-gray-600">Total: ${item.totalPrice.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400"
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
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Cart Summary</h2>
        <p className="text-lg">Total Items: {totalQuantity}</p>
        <p className="text-lg">Total Price: ${totalPrice.toFixed(2)}</p>
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mt-4"
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}

export default Cart