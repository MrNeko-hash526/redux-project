import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../features/shopCart/cartSlice'
import Slider from '../components/Slider'

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const dispatch = useDispatch()

  // Fetch featured products on component mount
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json()
        setFeaturedProducts(products.slice(0, 8)) // Display exactly 8 products as featured
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
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="text-center py-8 bg-gray-800 border border-gray-700 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to My E-commerce Store</h1>
        <h2 className="text-2xl font-semibold mb-4">
          Discover amazing products and unbeatable deals.
        </h2>
        <p className="text-lg">Shop now and enjoy exclusive offers!</p>
      </div>

      {/* Full-Width Slider */}
      <div className="w-full my-12 border border-gray-700 shadow-lg rounded-lg"> {/* Added border and shadow */}
        <Slider />
      </div>

      {/* Featured Products Section */}
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="border border-gray-700 p-4 rounded-lg shadow-lg bg-gray-800">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-400 mb-2">${product.price}</p>
              <p className="text-sm text-gray-500 mb-4">
                {product.description.length > 100
                  ? `${product.description.slice(0, 100)}...`
                  : product.description}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
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