import React, { useState, useEffect } from 'react'

function Slider() {
  const [products, setProducts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fetch products for the slider
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data.slice(0, 5)) // Display the first 5 products in the slider
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  // Auto-rotate slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 5000) // Rotate every 5 seconds
    return () => clearInterval(interval)
  }, [products.length])

  if (products.length === 0) {
    return <p className="text-center text-gray-500">Loading slider...</p>
  }

  return (
    <div className="relative w-full overflow-hidden border border-gray-700 shadow-lg bg-gray-900">
      {/* Slider Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => (
          <div key={product.id} className="w-full flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600"
      >
        &#8592;
      </button>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600"
      >
        &#8594;
      </button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-indigo-500' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slider