var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.use(express.static(__dirname + '/app'));
//add this so the browser can GET the bower files
app.use('/bower_components', express.static(__dirname + 'bower_components'));
app.listen(process.env.PORT || 5000);
