const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myCommerce');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Connected to MongoDB');
});


const categorySchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String },
  cost: { type: Number }
})
const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: Number }
})

const categoryModel = mongoose.model('t1_category', categorySchema);
const userModel = mongoose.model('t2_users', userSchema);



// module.exports = db;
module.exports = {
  db,
  categoryModel,
  userModel
};
// module.exports = userModel;
// module.exports = prodHead;
// This snippet connects to the MongoDB database and exports the connection object.
// The connection object is then imported in the index.js file to start the server.





