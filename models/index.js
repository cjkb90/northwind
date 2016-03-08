var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/northwind');//db name is northwind
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'mongodb connection error:'));

var productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
	quantity: Number
});

var Product = mongoose.model('Product',productSchema);

module.exports = {
	Product: Product
}
