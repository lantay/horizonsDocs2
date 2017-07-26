var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(process.env.MONGODB_URI);

const userSchema = mongoose.Schema({
  username: {
    type: mongoose.schema.ObjectId,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const documentSchema = mongoose.Schema({
  title: String ,

  collabs:[
    {
  //array of users that have access to the doc
      type: mongoose.Schema.ObjectId,
      ref:'User'
    }],
  //important to keep track of date created for docs later
  dateCreated: Date,
  owner: {
    type:mongoose.Schema.ObjectId,
    ref: 'User'
  },
  password: String
});


const User = mongoose.model('User', userSchema);
const Document = mongoose.model('Document', documentSchema);


module.export= {
  User: User,
  Document: Document
};
