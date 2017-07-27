const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Importing our models
const models = require('../models');
const Docs = models.Docs;
const User = models.User;

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
  console.log('req.body = ', req.body);
  
  var newUser = new User({
    username: req.body.username,
    password: req.body.password, 
  });	
  newUser.save(function(err, user) {
    if (err) {
      console.log("error", err);
      res.status(500).redirect('/');
    } else {
      res.send('Successfully registered!');
    }
  });
});

// Retrieving the list of document upon logging in
app.get('/docslist', function(req, res) {
  var docsArray = [];
  Docs.find({collaborators:req.params.userId})
    .exec()
    .then((documents) => {
      documents.forEach((document) => {
        docsArray.push(document);
      });
    });
  res.send(docsArray);
});

// Saving changes to a document 
app.get('/saveDoc', function(req, res) {	
});

app.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!');
});
