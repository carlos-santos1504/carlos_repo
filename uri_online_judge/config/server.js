var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');
console.log("Servidor ON");

consign()
	.include('app/routes')
	.include('app/models')
	.into(app);

module.exports = app;