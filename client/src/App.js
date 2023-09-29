import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tickers, setTickers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getTickers")
      .then((response) => {
        console.log("Response Data:", response.data);
        setTickers(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data");
      });
  }, []);

  return (
    <div className="app-container">
      <h1 className="text-4xl font-semibold text-primary mb-4 text-center">
        WazirX Datafetch Demo Api Project
      </h1>
      <p className="text-gray-600 text-center max-w-4xl mx-auto">
        Welcome to the WazirX Tickers app. This app displays the latest ticker
        information for various cryptocurrency pairs. You can find details such
        as the last price, buy and sell prices, volume, and base unit for each
        pair.This data gets automatically refreshed after 2 minutes and also
        stored the results in MongoDB database.
      </p>
      {error && <p className="text-red-500">{error}</p>}
      <table className="table-auto w-full my-8">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-[#000]">Name</th>
            <th className="px-4 py-2 border border-[#000]">Last</th>
            <th className="px-4 py-2 border border-[#000]">Buy</th>
            <th className="px-4 py-2 border border-[#000]">Sell</th>
            <th className="px-4 py-2 border border-[#000]">Volume</th>
            <th className="px-4 py-2 border border-[#000]">Base Unit</th>
          </tr>
        </thead>
        <tbody>
          {tickers.length > 0 ? (
            tickers.map((ticker, index) => (
              <tr key={index}>
                <td className="border border-[#000] px-4 py-2 text-center ">
                  {ticker.name}
                </td>
                <td className="border border-[#000] px-4 py-2 text-center">
                  {ticker.last}
                </td>
                <td className="border border-[#000] px-4 py-2 text-[#3da858] text-center">
                  {ticker.buy}
                </td>
                <td className="border border-[#000] px-4 py-2 text-[#e65757] text-center">
                  {ticker.sell}
                </td>
                <td className="border border-[#000] px-4 py-2 text-secondary text-center">
                  {ticker.volume}
                </td>
                <td className="border border-[#000] px-4 py-2 text-center">
                  {ticker.baseUnit}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border border-[#000] px-4 py-2" colSpan="6">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
