const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

// body parser middleware
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected.."))
.catch(err => console.error(err));

// use routes
app.use('/api/items', items);

// server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}..`)
});