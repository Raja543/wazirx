const express = require('express');
const router = express.Router();
const tickerController = require('../controllers/tickerController');

router.get('/tickers', tickerController.fetchWazirXTickers);

module.exports = router;
