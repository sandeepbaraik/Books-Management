const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./db');
const booksRouter = require('./routes/bookRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect to MongoDB
connectDB();
app.use('/', booksRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
