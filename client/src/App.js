import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    // Function to fetch data from your Express server
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/tickers"); // Replace with your Express route
        setTickers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    // Initial fetch
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>WazirX Tickers</h1>
      <table>
        {/* Render your ticker data here */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Last</th>
            <th>Buy</th>
            <th>Sell</th>
            <th>Volume</th>
            <th>Base Unit</th>
          </tr>
        </thead>
        <tbody>
          {tickers.map((ticker, index) => (
            <tr key={index}>
              <td>{ticker.symbol}</td>
              <td>{ticker.last}</td>
              <td>{ticker.buy}</td>
              <td>{ticker.sell}</td>
              <td>{ticker.volume}</td>
              <td>{ticker.baseAsset}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
