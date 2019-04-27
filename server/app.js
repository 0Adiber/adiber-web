var express = require('express');
var app = express();

const fetch = require("node-fetch");
const path = require("path");

app.listen('33333', function(){
  console.log("Backend listening on Port: 33333");
  
  //first github get req
  fetchGithub();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.send("This is se backend")
});

/*
* GITHUB Start
*/
let gitItems = {
  items: []
}

function fetchGithub() {
  gitItems.items = [];
  fetch("https://api.github.com/users/0Adiber/repos?type=all", { method: "GET" })
  .then(res => res.json())
  .then(
    (result) => {
      let gitTemp = {
        temps: []
      };
      gitTemp.temps = result;
      gitTemp.temps.map(t => {
        gitItems.items.push({
          id: t.id,
          description: t.description,
          owner: {
            id: t.owner.id
          },
          created_at: t.created_at,
          updated_at: t.updated_at,
          size: t.size 
        });
      });
      console.log("Updated Github Repos Successfully!");
    },
    (error) => {
      gitItems.items = {error: error.message}
      console.log(gitItems)
    }
  );
}
//update github every hour
setInterval(() => {
  fetchGithub();
}, 3600*1000); //== 1h


//get
app.get('/github', function(req, res) {
  res.json(gitItems).end();
});

module.exports = app;

/*
* Github OVER
*/
