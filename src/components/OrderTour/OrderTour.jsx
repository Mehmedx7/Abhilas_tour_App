import React, { useState } from 'react'

const OrderTour = () => {
    const [amount, setAmount] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div className=" p-5 shadow-lg rounded-lg">
      <h2 className=" mb-4 p-5 pb-0 mx-4 font-bold text-lg">Order a Tour</h2>
      <form className='p-5'>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Tour Package</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleAmountChange}
          >
            <option value={0}>Select a package</option>
            <option value={100}>Basic Tour - $100</option>
            <option value={200}>Premium Tour - $200</option>
            <option value={300}>Deluxe Tour - $300</option>
          </select>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium">Total: <span className="text-green-600">${amount}</span></h3>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Order Now
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrderTour