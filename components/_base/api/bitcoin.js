import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BitcoinPrice = () => {
  // Initialize state variables
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [prices, setPrices] = useState([]);

  // Fetch data from API in useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coindesk.com/v1/bpi/historical/close.json?currency=BTC&start=2022-01-01&end=2022-12-31'
        );
        setPrices(Object.values(response.data.bpi));
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Render loading, error, or prices depending on state
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <ul>
      {prices.map((price, index) => (
        <li key={index}>{price}</li>
      ))}
    </ul>
  );
};

export default BitcoinPrice;