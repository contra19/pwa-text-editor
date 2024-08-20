const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3478;

// Serve static files from the 'client/dist' directory
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define a route to serve your index.html file for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
