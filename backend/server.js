const express = require('express');
const app = express();

// Example route
app.get('/', function (req, res) {
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


app.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!');
});
