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
});

app.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!');
});
