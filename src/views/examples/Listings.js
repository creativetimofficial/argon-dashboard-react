/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import React, { useState, useEffect } from 'react';
import vintageCamera from '../../assets/img/brand/vintage Camera.png';
import wallet from '../../assets/img/brand/wallet.png';
import speaker from '../../assets/img/brand/speaker.png';
import shoes from '../../assets/img/brand/Shoes.png';


// import { Star } from 'lucide-react';

const fakeAPI = [
  {
    id: 1,
    name: 'Vintage Camera',
    amount: '$120',
    image: vintageCamera,
    seller: 'Retro World',
    category: 'Electronics',
    rating: 4,
    description: 'Classic film camera with timeless design and manual controls.',
  },
  {
    id: 2,
    name: 'Leather Wallet',
    amount: '$45',
    image: wallet,
    seller: 'Crafted Co.',
    category: 'Accessories',
    rating: 5,
    description: 'Handcrafted leather wallet made with full-grain leather.',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    amount: '$85',
    image: speaker,
    seller: 'SoundHub',
    category: 'Audio',
    rating: 3,
    description: 'Portable Bluetooth speaker with rich bass and 10-hour playtime.',
  },
  {
    id: 4,
    name: 'Running Shoes',
    amount: '$60',
    image: shoes,
    seller: 'FastFeet',
    category: 'Footwear',
    rating: 4,
    description: 'Lightweight and comfortable shoes for daily running and exercise.',
  },
];

const Categories = ['All', 'Electronics', 'Accessories', 'Audio', 'Footwear'];

export default function MarketplaceListings() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setItems(fakeAPI);
    }, 500);
  }, []);

  const filteredItems = items.filter((item) => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Marketplace Listings</h2>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select
          className="px-4 py-2 border rounded-xl text-gray-700"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {Categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search items..."
          className="px-4 py-2 border rounded-xl flex-1 md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-44 object-cover rounded-xl mb-4"
            />
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-lg font-semibold text-gray-900 truncate w-40">{item.name}</h3>
              <span className="bg-blue-100 text-blue-700 text-sm px-2 py-0.5 rounded-full">
                {item.category}
              </span>
            </div>
            <p className="text-green-600 text-md font-medium mb-1">{item.amount}</p>
            <p className="text-sm text-gray-500 mb-3">Sold by: <span className="font-medium">{item.seller}</span></p>

            {/* Rating
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < item.rating ? 'text-yellow-400' : 'text-gray-300'}
                  fill={i < item.rating ? '#facc15' : 'none'}
                />
              ))}
            </div> */}

            <button
              onClick={() => setSelectedItem(item)}
              className="w-full bg-blue-600 text-black font-semibold py-2 rounded-xl hover:bg-blue-700 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-black rounded-2xl p-6 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-4 text-gray-400 hover:text-gray-600 text-xl"
            >
              &times;
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedItem.name}</h3>
            <p className="text-md text-gray-700 mb-2">{selectedItem.description}</p>
            <p className="text-green-600 font-semibold text-lg mb-1">{selectedItem.amount}</p>
            <p className="text-sm text-gray-500 mb-2">Sold by: {selectedItem.seller}</p>
            <div className="flex items-center mb-4">
              {/* {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < selectedItem.rating ? 'text-yellow-400' : 'text-gray-300'}
                  fill={i < selectedItem.rating ? '#facc15' : 'none'}
                />
              ))} */}
            </div>
            <button
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-xl hover:bg-green-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
