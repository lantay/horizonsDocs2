const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Example route
app.get('/', function(req, res) {
  console.log('Talking to the server!');
  res.send('Hello World!');
});

app.get('/docslist', function (req, res) {
  var docsArray = [];
  Document.find({collaborators:req.params.userId})
    .exec()
    .then((documents) => {
      documents.forEach((document) => {
        docsArray.push(document);
      });
    });
  res.send(docsArray);

});

// Handling a registration request
app.post('/register', function(req, res) {
  console.log('req type', typeof req);
  res.send('Successfully sent the registration info to the server!');
});

app.post('/registerFacebook,' function(req,res){
  passport.authenticate('docsList'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
});

app.post('/login',
  passport.authenticate('docsList', {
    successRedirect: '/',
    failureRedirect: '/login' }));


app.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!');
});

//makes sure that people can only enter one room at once
//spcket.oneRoom = room


//socket.leave(socket.theOneRoom)
//remember: each server has their own socket
//runs 2 servers at the same time
//do a .on for the user left on the docs front end
//socket is an object, and we are allowed to put our own keys on it
//can't sent functions across the wire. That's why we use stringify
//to convert object to strings
//note: put red into style map
//make serparate socket to manually tell user information about the cursor
//first

//make an auth.js, server.js, and database.js for the back-end 
