import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../features/shopCart/cartSlice'
import Slider from './Slider'

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const dispatch = useDispatch()

  // Fetch featured products on component mount
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json()
        setFeaturedProducts(products.slice(0, 5)) // Display the first 5 products as featured
      } catch (error) {
        console.error('Error fetching featured products:', error)
      }
    }
    fetchFeaturedProducts()
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product))
    alert(`${product.title} has been added to your cart!`) // Alert notification
  }

  return (
    <div className="text-center mt-10 mb-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to My E-commerce Store</h1>
      <h2 className="text-2xl font-bold mb-4">
        Explore our wide range of products and enjoy great deals.
      </h2>
      <p className="mb-8">Check out our latest arrivals and special offers!</p>

      {/* Slider Component */}
      <Slider />

      {/* Featured Products Grid */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <p className="text-sm text-gray-500 mb-4">
                {product.description.length > 100
                  ? `${product.description.slice(0, 100)}...`
                  : product.description}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home