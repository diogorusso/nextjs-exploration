import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './BitcoinPrice.css';

const BitcoinPrice = () => {
// Initialize state variables
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [prices, setPrices] = useState([]);
const [dates, setDates] = useState([]);

// Fetch data from API in useEffect hook
useEffect(() => {
const fetchData = async () => {
try {
const response = await axios.get(
'https://api.coindesk.com/v1/bpi/historical/close.json?currency=BTC&start=2022-01-01&end=2022-12-31'
);
setPrices(Object.values(response.data.bpi));
setDates(Object.keys(response.data.bpi));
setLoading(false);
} catch (e) {
setError(e);
setLoading(false);
}
};
fetchData();
}, []);

// Render loading, error, or cards depending on state
if (loading) {
return <p>Loading...</p>;
}
if (error) {
return <p>Error: {error.message}</p>;
}
  return (
    <div className="grid grid-cols-4 gap-4">
      {prices.map((price, index) => (
  <div key={index} className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-100">
    <div className="text-3xl font-bold">{price}</div>
    <div>Bitcoin</div>
    <div>{dates[index]}</div>
    <div className="flex items-center mt-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
        alt="Bitcoin icon"
        className="w-6 h-6"
      />
      <div className="ml-2 text-sm">1 BTC</div>
    </div>
  </div>
))}
    </div>
  );
};

export default BitcoinPrice;
