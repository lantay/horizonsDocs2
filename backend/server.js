const express = require('express');
const app = express();

// // Required for socket.io
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);

// Extra mongoose setup???

const bodyParser = require('body-parser');
// Importing our models
const models = require('../models');
const Doc = models.Doc;
const User = models.User;
// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Graham had an app.use for session and a MongoStore

// io.on('connection', socket => {

//   // {name} below is object destructuring. I'm pulling the item with key name.
//   socket.on('join', ({doc}) => {
//     console.log('join', doc);
//     socket.emit('helloBack');
//     socket.join(doc);

//     // Because a user is only in one room at a time, we can save room direcly on socket.
//     socket.room = doc;

//      // Broadcast sends the following message to everyone but the person who trigerred the on listener
//     socket.broadcast.to(doc).emit('userJoined');
//   });

//   socket.on('disconnect', () => {
//     console.log('socket disconnected');
//     socket.leave()
//   });
// });

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
      res.send('Successfully registered');
      res.redirect('/');
    }
  });
});

// Retrieving the list of document upon logging in
app.get('/docslist', function(req, res) {
  var docsArray = [];
  Doc.find({collaborators:req.params.userId})
    .exec()
    .then((documents) => {
      documents.forEach((document) => {
        docsArray.push(document);
      });
    });
  res.send(docsArray);
});

// Creating a new document
app.post('/createDoc', function(req, res) {
  var newDoc = new Doc({
    title: req.body.docName,
    dateCreated: new Date(),
    // With the user id we have to go find their user object in the DB and add them as the owner and and as a collaborator
    collabs: [req.body.userId],
    owner: req.body.userId
  });
  newDoc.save(function(err, user) {
    if (err) {
      console.log("error", err);
    } else {
      res.send('Successfully saved the doc!');
    }
  });
});

// Saving changes to a document
app.get('/saveDoc', function(req, res) {

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
