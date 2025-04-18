import React, { useState, useEffect } from 'react'

function Slider() {
  const [products, setProducts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fetch products from the API
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
    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [products.length])

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    )
  }

  if (products.length === 0) {
    return <p>Loading slider...</p>
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="border p-4 rounded-lg shadow-md text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].title}
          className="w-full h-60 object-contain mb-4 rounded-lg bg-white p-2"
        />
        <h3 className="text-lg font-semibold">{products[currentIndex].title}</h3>
        <p className="text-yellow-300 mb-2 text-xl font-bold">
          ${products[currentIndex].price}
        </p>
        <p className="text-sm text-gray-200">
          {products[currentIndex].description.length > 100
            ? `${products[currentIndex].description.slice(0, 100)}...`
            : products[currentIndex].description}
        </p>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600"
      >
        &#8594;
      </button>
    </div>
  )
}

export default Slider