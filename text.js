const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define your endpoint
app.post("/instagram/webhook", (req, res) => {
  // Handle the incoming Instagram webhook payload here
  console.log("Received Instagram webhook payload:", req.body);
  // Respond to Instagram with a 200 OK status
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


