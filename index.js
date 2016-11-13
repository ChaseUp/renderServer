var express = require("express");
var app = express();
var React = require("react");
var browserify = require('browserify');
var ReactDOMServer = require('react-dom/server');

var props = {
  	items: [
    	'Item 0',
    	'Item 1'
  	]
};
// var Element = React.createElement('div', null, 'Hello World!');
var Element = React.createClass({
	render: function(){
		return (
			<p>some words.</p>
		)
	}
});
var element = ReactDOMServer.renderToString(Element);
var Myapp = require("./app.js").Myapp;
var mm = new Myapp();
// var ttt = ReactDOMServer.renderToString(mm);
console.log(new Myapp());
console.log(Element);

app.get("/",function(req,res){
	res.end(element);
});
app.listen(8080);