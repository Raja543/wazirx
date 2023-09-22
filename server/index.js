const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const tickerRoutes = require("./routes/tickerRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

app.use((err, req, res, ) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Routes
app.use("/api", tickerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
