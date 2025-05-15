const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
mongoose.connect('mongodb://localhost:27017/myCommerce');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Connected to MongoDB');
});


const categorySchema = new mongoose.Schema({
  title: { type: String },
  product_link: { type: String },
  product_id: { type: String },
  source: { type: String },
  price: { type: String },
  rating: { type: Number },
  reviews: { type: String },
  delivery: { type: String },
  thumbnail: { type: String },
  searchQuery: { type: String }
})
const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String , unique : true },
  password: { type: String }
})

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

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





