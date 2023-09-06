const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`Requesting endpoint ${req.url}`);
  next()
})
// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route to serve the landing page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Define a route to serve the landing page
app.get('/bulma', (req, res) => {
  res.sendFile(__dirname + '/public/index_bulma.html');
});

// Define a route to serve the landing page
app.get('/mape', (req, res) => {
  res.sendFile(__dirname + '/public/index_bulma_es.html');
});

app.get('/basket', (_, res) => res.sendFile(__dirname + '/public/basket3.html'));

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Local Server running on port ${port}`);
});
