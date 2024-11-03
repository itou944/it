// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/noteRoutes'); // Import the routes

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mount the notes route
app.use('/', noteRoutes); // Use '/' to match the route in api.js

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
