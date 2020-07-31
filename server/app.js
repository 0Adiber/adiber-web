var express = require('express');
var app = express();
var colors = require('colors');

const dotenv = require('dotenv');
dotenv.config();

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
  getProjectJson();
  getLanguages()
  getYoutube();
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
//update github every 5 minutes
setInterval(() => {
  fetchGithubOwn();
}, 5*60*1000); //== 5 min

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
//update github weareroot every 5 minutes
setInterval(() => {
  fetchGithubRoot();
}, 5*60*1000); //== 5 min


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
//update github alda every 5 minutes
setInterval(() => {
  fetchGithubAlda();
}, 5*60*1000); //== 5 min


//get
app.get('/gitalda', function(req, res) {
  res.json(gitItemsAlda).end();
});

/*
* Gitbut alda OVER
*/

/*
* Projects START
*/
let projectsJson;
//getting the downloads posts
function getProjectJson() {
  projectsJson = require('./res/projects.json')
}
//update every 5 minutes
setInterval(() => {
  getProjectJson();
}, 5*60*1000) //== 5 min
//get
app.get('/projects', function(req, res) {
  res.json(projectsJson).end()
});

/*
* Projects OVER
*/


/*
* LANGUAGES START
*/
let languagesJson;
//getting the Languages
function getLanguages() {
  languagesJson = require('./res/languages.json')
}
//update every hour
setInterval(() => {
  getLanguages();
}, 5*60*1000) // == 5 min
//get
app.get('/languages', function(req, res) {
  res.json(languagesJson).end()
})

/*
* Languages OVER
*/

/*
* YOUTUBE START
*/

let youtubeJson = [];
//getting the Date from YT Data API v3
function getYoutube() {
  const URL = "https://www.googleapis.com/youtube/v3/";
  const APIKEY = process.env.API_KEY;
  fetch(URL + "channels?part=contentDetails&id=UCPVrHhuwzAz9ylRcSx2ne_A&key=" + APIKEY)
    .then(res => res.json())
    .then(json => {
      const uploadsId = json.items[0].contentDetails.relatedPlaylists.uploads;

      fetch(URL + "playlistItems?part=contentDetails&maxResults=50&playlistId=" + uploadsId + "&key=" + APIKEY)
        .then(res => res.json())
        .then(json => {
          json.items.map(i => {
            //i.contentDetails.videoId
            fetch(URL + "videos?part=snippet,statistics&id="+i.contentDetails.videoId+"&key=" + APIKEY)
              .then(res => res.json())
              .then(json => {
                json = json.items[0];
                youtubeJson.push({
                  'videoId': json.id,
                  'title': json.snippet.title,
                  'thumbnail': json.snippet.thumbnails.high.url,
                  'views': json.statistics.viewCount,
                  'likes': json.statistics.likeCount,
                  'comments': json.statistics.commentCount,
                })
              })
              .catch(err => {
                console.log("Could not fetch Youtube: " + err.toString());
              })
          })
        })
        .catch(err => {
          console.log("Could not fetch Youtube: " + err.toString());
        })
    })
    .catch(err => {
      console.log("Could not fetch Youtube: " + err.toString());
    })
}
//update every hour because quota
setInterval(() => {
  getYoutube();
}, 3600*1000) // == 1h
//get
app.get('/youtube', function(req, res) {
  res.json(youtubeJson).end()
})

/*
* Youtube OVER
*/

module.exports = app;