var express = require('express');
var router = express.Router();
var models = require('../models/');
var Product = models.Product;

router.get('/',function(req, res){
	res.render('index', {title: "Home"})
});

router.get('/',function(req, res, next){
	Product.find({})
	.then(function(products){
		res.render('products', {title: "Products", products:products});	
	}, next)
});

router.post('/',function(req, res, next){
	var product = new Product({
		name: req.body.name,
		description: req.body.description,
		quantity: req.body.quantity
	});
	product.save()
    .then(function(){
	    res.redirect('/products');
    
    }, next);
});


router.get('/products/active',function(req, res){
	res.send('List of Active Products!');
});

module.exports = router;
