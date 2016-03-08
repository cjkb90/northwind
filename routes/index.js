var express = require('express');
var router = express.Router();
var models = require('../models/');
var Product = models.Product;

router.get('/',function(req, res, next){
	Product.find({}).exec()
	.then(function(product){
		res.render('index', {title: "Home", products:product})	
	})
	.then(null,next);
});

router.post('/',function(req, res){
	var product = new Product({
		name: req.body.name,
		description: req.body.description,
		quantity: req.body.quantity
	});
	product.save()
	.catch(function(err){
		console.log(err);
	})
	res.redirect('/')
});

router.get('/products',function(req, res){
	res.render('index', {title: "Products"})
});

router.get('/products/active',function(req, res){
	res.send('List of Active Products!');
});

module.exports = router;