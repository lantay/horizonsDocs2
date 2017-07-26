const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Example route
app.get('/', function(req, res) {
  console.log('Talking to the server!');
  res.send('Hello World!');
});

// Handling a registration request
app.post('/register', function(req, res) {
  console.log('req type', typeof req); 
  res.send('Successfully sent the registration info to the server!');
});

app.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!');
});
