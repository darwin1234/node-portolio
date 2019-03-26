const mongoose = require('mongoose');

var users = mongoose.model('users', {
	username: { type: String },
	firstname: { type: String },
    lastname: { type: String },
    password: { type: String }
});

var products = mongoose.model('products', {
	productID: { type: String },
	productname: { type: String },
    productDescription: { type: String },
});
	

module.exports = { users,products};