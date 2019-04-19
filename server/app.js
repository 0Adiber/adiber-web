var express = require('express');

var app = express();

app.listen('33333', function(){
  console.log("listening");
});

app.get('/', function(req, res) {
  res.send("test")
});

//GITHUB 
app.get('/github', function(req, res) {
  res.json({test: 'moin'});
});

module.exports = app;
