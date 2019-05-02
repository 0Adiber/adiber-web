var express = require('express');
var app = express();
var colors = require('colors');

var mysql = require('mysql');

const fetch = require("node-fetch");
const path = require("path");

app.listen('33333', function(){
  console.log("Backend listening on Port: 33333".black.bgWhite);
  //mysql connection
  conToMysql();
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
      console.log("\nUpdated Github Repos Successfully!".random);
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

/*
* CONTACT Start
*/

app.post('/contact', function(req, res) {
  console.log(req.body);
  res.send("noise");
});

/*
* CONTACT OVER
*/


//MYSQL
function conToMysql() {

  console.log("----------------------");
  console.log("MYSQL:".yellow.bold);

  const data = require('./_configs/mysql.json');

  global.connection = mysql.createConnection({
    host: data.host,
    user: data.username,
    passoword: data.passoword
  });

  //connect
  connection.connect(function(err) {
    if(err){
      console.log("Can't connect to Database".red.bold)
      throw err;
    }
    console.log("Connected with MYSQL!".green.underline);
  });
  //create database
  connection.query("CREATE DATABASE IF NOT EXISTS adiber_web", function(err, result) {
    if(err){
      console.log("Can't create Database".red.bold)
      throw err;
    }
    if(result.warningCount > 0){
      console.log("Webpage Database already exists!".black.bgWhite)
    } else {
      console.log("Webpage Database created!".green.underline)
    }
  });
  //select database
  connection.query("USE adiber_web", function(err, result){
    if(err){
      console.log("Can't select Database".red.bold)
      throw err;
    }
    console.log("Selected Database 'adiber_web'".black.bgWhite);
  });
  //create table
  connection.query("CREATE TABLE IF NOT EXISTS contacts (uid INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), message VARCHAR(1023))", function(err, result) {
    if(err){
      console.log("Can't create Table".red.bold)
      throw err;
    }
    if(result.warningCount > 0){
      console.log("Contacts Table exists!".black.bgWhite)
    } else {
      console.log("Contacts Table created!".green.underline)
    }
    console.log("----------------------")
  });
}