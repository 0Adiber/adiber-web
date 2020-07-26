var express = require('express');
var app = express();
var colors = require('colors');

const fetch = require("node-fetch");

app.use(express.static('public'))

app.listen('33333', function(){
  console.log("Backend listening on Port: 33333".black.bgWhite);
  //mysql connection
  //conToMysql();
  //first github get req
  fetchGithubOwn();
  fetchGithubAlda();
  fetchGithubRoot();
  getDownloadPosts();
  getLanguages()
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.send("Adibers Webpage backend!")
});

/*
* GITHUB Start
*/
let gitItemsOwn = {
  items: []
}

function fetchGithubOwn() {
  gitItemsOwn.items = [];
  fetch("https://api.github.com/users/0Adiber/repos", { method: "GET" })
  .then(res => res.json())
  .then(
    (result) => {
      let gitTemp = {
        temps: []
      };
      gitTemp.temps = result;
      gitTemp.temps.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at));
      gitTemp.temps.map(t => {
        gitItemsOwn.items.push({
          id: t.id,
          name: t.name,
          description: t.description,
          owner: {
            id: t.owner.id,
            user: t.owner.login
          },
          url: t.html_url,
          created_at: t.created_at,
          updated_at: t.updated_at,
          size: t.size 
        });
      });
      console.log("\nUpdated Github Repos Successfully!".red);
    },
    (error) => {
      gitItemsOwn.items = {error: error.message}
      console.log(gitItemsOwn)
    }
  );
}
//update github every hour
setInterval(() => {
  fetchGithubOwn();
}, 3600*1000); //== 1h

//get
app.get('/github', function(req, res) {
  res.json(gitItemsOwn).end();
});

/*
* Github OVER
*/

/*
* GITHUB WEAREROOT
*/

let gitItemsRoot = {
  items: []
}

function fetchGithubRoot() {
  gitItemsRoot.items = [];
  fetch("https://api.github.com/orgs/weare-root/repos?type=all&direction=desc", { method: "GET" })
  .then(res => res.json())
  .then(
    (result) => {
      let gitTemp = {
        temps: []
      };
      gitTemp.temps = result;
      gitTemp.temps.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
      gitTemp.temps.map(t => {
        gitItemsRoot.items.push({
          id: t.id,
          name: t.name,
          description: t.description,
          owner: {
            id: t.owner.id,
            user: t.owner.login
          },
          url: t.html_url,
          created_at: t.created_at,
          updated_at: t.updated_at,
          size: t.size 
        });
      });
      console.log("\nUpdated Github we-are-root Successfully!".blue);
    },
    (error) => {
      gitItemsRoot.items = {error: error.message}
      console.log(gitItemsRoot)
    }
  );
}
//update github alda every hour
setInterval(() => {
  fetchGithubRoot();
}, 3600*1000); //== 1h


//get
app.get('/gitweareroot', function(req, res) {
  res.json(gitItemsRoot).end();
});
/*
* Github we are root over
*/

/*
* GITHUB ALDA
*/

let gitItemsAlda = {
  items: []
}

function fetchGithubAlda() {
  gitItemsAlda.items = [];
  fetch("https://api.github.com/orgs/alda-dhif17/repos?type=all&direction=desc", { method: "GET" })
  .then(res => res.json())
  .then(
    (result) => {
      let gitTemp = {
        temps: []
      };
      gitTemp.temps = result;
      gitTemp.temps.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
      gitTemp.temps.map(t => {
        gitItemsAlda.items.push({
          id: t.id,
          name: t.name,
          description: t.description,
          owner: {
            id: t.owner.id,
            user: t.owner.login
          },
          url: t.html_url,
          created_at: t.created_at,
          updated_at: t.updated_at,
          size: t.size 
        });
      });
      console.log("\nUpdated Github Alda Successfully!".blue);
    },
    (error) => {
      gitItemsAlda.items = {error: error.message}
      console.log(gitItemsAlda)
    }
  );
}
//update github alda every hour
setInterval(() => {
  fetchGithubAlda();
}, 3600*1000); //== 1h


//get
app.get('/gitalda', function(req, res) {
  res.json(gitItemsAlda).end();
});

/*
* Gitbut alda OVER
*/

/*
* Posts START
*/
let downloadJson;
//getting the downloads posts
function getDownloadPosts() {
  downloadJson = require('./res/downloads.json')
}
//update every hour
setInterval(() => {
  getDownloadPosts();
}, 3600*1000) //== 1h
//get
app.get('/downloads', function(req, res) {
  res.json(downloadJson).end()
});


let languagesJson;
//getting the Languages
function getLanguages() {
  languagesJson = require('./res/languages.json')
}
//update every hour
setInterval(() => {
  getLanguages();
}, 3600*1000) // == 1h
//get
app.get('/languages', function(req, res) {
  res.json(languagesJson).end()
})

module.exports = app;