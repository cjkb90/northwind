var express = require('express');
var swig = require('swig');
swig.setDefaults({cache:false});//since we'll be refreshing our pages a lot
var morgan = require('morgan');
var logger = morgan('dev');//what are you looking to log?
//Morgan is used to console.log stuff

var bodyParser = require('body-parser');
//body parser is used to populate req&res.body

var app = express();

module.exports = app;

app.use(express.static('./public/'));
app.set('view engine','html');
app.engine('html',swig.renderFile);

app.use(bodyParser.urlencoded({extended:true}));

app.use(logger);
var routes = require(__dirname+'/routes/');
app.use('/products', routes);


app.listen(process.env.PORT || 3000, function(){
  //why have this callback function if you're not going to do anything with it
});//set this up in server.js file instead of putting it in app.js

