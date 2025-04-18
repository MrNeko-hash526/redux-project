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

  if (status === 'loading') return <p>Loading products...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain mb-2"
          />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList