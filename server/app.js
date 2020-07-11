var express = require('express');
var app = express();
var colors = require('colors');

//var mysql = require('mysql');

const fetch = require("node-fetch");
//const path = require("path");

app.listen('33333', function(){
  console.log("Backend listening on Port: 33333".black.bgWhite);
  //mysql connection
  //conToMysql();
  //first github get req
  fetchGithubOwn();
  fetchGithubAlda();
  getDownloadPosts();
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
  fetch("https://api.github.com/users/0Adiber/repos?type=all", { method: "GET" })
  .then(res => res.json())
  .then(
    (result) => {
      let gitTemp = {
        temps: []
      };
      gitTemp.temps = result;
      gitTemp.temps.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
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


/*
* CONTACT Start
*/
/* not needed atm
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// handle request
app.post('/contact', function(req, res) {
  console.log(`New Contact: ${req.body.user.name}`.random);

  mysqlCon.query(`INSERT INTO contacts (name, email, message) VALUES ('${req.body.user.name}', '${req.body.user.email}', '${req.body.user.message}')`, function(err, result) {
    if(err){
      console.log("Can't insert into Contacts".red.bold)
      //throw err;
      res.status(503).end("Database Error");
    } else {
      console.log("Successfully inserted new Contact Form!".green.underline);
      res.status(200).end("Contact Form Successfull");
    }
  });
});

/*
* CONTACT OVER
*/

/*
* MYSQL Basic Start
*/
/* not needed atm
function conToMysql() {
  console.log("----------------------");
  console.log("MYSQL:".yellow.bold);

  const data = require('./_configs/mysql.json');
  console.log("Host: " + data.host + "\nUser:" + data.username)

  global.mysqlCon = mysql.createConnection({
    host: data.host,
    user: data.username,
    password: data.password,
  });

  //connect
  mysqlCon.connect(function(err) {
    if(err){
      console.log("Can't connect to Database".red.bold)
      //throw err;
      return;
    }
    console.log("Connected with MYSQL!".green.underline);
  });
  //create database
  mysqlCon.query("CREATE DATABASE IF NOT EXISTS adiber_web", function(err, result) {
    if(err){
      console.log("Can't create Database".red.bold)
      //throw err;
      return;
    }
    if(result.warningCount > 0){
      console.log("Webpage Database already exists!".black.bgWhite)
    } else {
      console.log("Webpage Database created!".green.underline)
    }
  });
  //select database
  mysqlCon.query("USE adiber_web", function(err, result){
    if(err){
      console.log("Can't select Database".red.bold)
      //throw err;
      return;
    }
    console.log("Selected Database 'adiber_web'".black.bgWhite);
  });
  //create table
  mysqlCon.query("CREATE TABLE IF NOT EXISTS contacts (uid INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), message VARCHAR(2048))", function(err, result) {
    if(err){
      console.log("Can't create Table".red.bold)
      //throw err;
      return;
    }
    if(result.warningCount > 0){
      console.log("Contacts Table exists!".black.bgWhite)
    } else {
      console.log("Contacts Table created!".green.underline)
    }
    console.log("----------------------")
  });
}
/*
* MSQL OVER
*/


module.exports = app;