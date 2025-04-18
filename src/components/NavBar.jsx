import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../features/shopCart/cartSlice'

function NavBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const dispatch = useDispatch()

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://fakestoreapi.com/products`)
      const products = await response.json()
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(filteredProducts)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product))
    alert(`${product.title} has been added to your cart!`)
  }

  useEffect(() => {
    setSearchResults([])
    setSearchQuery('')
  }, [])

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center gap-2 rounded-lg shadow-md mb-4">
        <div className="text-cyan-500 text-xl font-bold">My Store</div>
        <div className="flex gap-4 text-lg font-semibold">
          <Link to="/" className="hover:text-cyan-500">Home</Link>
          <Link to="/products" className="hover:text-cyan-500">Products</Link>
          <Link to="/cart" className="hover:text-cyan-500">Cart</Link>
        </div>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded-lg text-black"
          />
          <button
            type="submit"
            className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600"
          >
            Search
          </button>
        </form>
      </nav>

      <div className="p-4">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map(product => (
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
        ) : (
          searchQuery.trim() && searchResults.length === 0 && (
            <p className="text-gray-500">No results found.</p>
          )
        )}
      </div>
    </div>
  )
}

export default NavBar