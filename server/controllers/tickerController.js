const axios = require('axios');
const Ticker = require('../models/tickerModel'); 

async function fetchWazirXTickers(req, res) {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const tickers = response.data;

    if (!Array.isArray(tickers)) {
      console.error("Data from API is not an array:", tickers);
      res.status(500).json({ error: "Internal Server Error" });
      return; 
    }

    // Sort tickers by volume in descending order and select the top 10
    const top10Tickers = tickers
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 10);

    // Clear existing data in the collection (optional)
    await Ticker.deleteMany({});

    // Store the top 10 tickers in MongoDB
    await Ticker.insertMany(top10Tickers);

    res.json(top10Tickers);
  } catch (error) {
    console.error("Error fetching and storing data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  fetchWazirXTickers,
};
