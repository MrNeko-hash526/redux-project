import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/shopCart/productSlice'
import { addItemToCart } from '../features/shopCart/cartSlice'

function ProductList() {
  const dispatch = useDispatch()
  const { products, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product))
    alert(`${product.title} has been added to your cart!`) // Confirmation message
  }

  if (status === 'loading') return <p className="text-center text-gray-500 mt-10">Loading products...</p>
  if (status === 'failed') return <p className="text-center text-red-500 mt-10">Error: {error}</p>

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-700 p-4 rounded-lg shadow-lg bg-gray-800 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-400 mb-4">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList