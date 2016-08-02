const config = require('../config/webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const app = express();
const path = require('path');
const compiler = webpack(config);
const port = 3000;

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));
app.use(express.static('client'));
app.use(express.static('client/bootstrap-3.3.7-dist'));
app.use('/static', express.static('./src/api'));

app.get('/bootstrap.css', function(req,res) {
	res.sendFile(path.resolve('client/bootstrap-3.3.7-dist/css/bootstrap.min.css'));
})

app.listen(port, function(err) {
	if(err) throw err;
	console.log("Listening on port", port)
})