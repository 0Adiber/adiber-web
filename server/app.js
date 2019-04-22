var express = require('express');

var app = express();

app.listen('33333', function(){
  console.log("listening");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.send("test")
});

//GITHUB 
app.get('/github', function(req, res) {
  res.json({
    "items": [
      { "id": 1, "name": "Apples",  "price": "$2" },
      { "id": 2, "name": "Peaches", "price": "$5" }
    ] 
  }).end();
});

module.exports = app;
