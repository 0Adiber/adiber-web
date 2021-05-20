import express from 'express';
const app = express();
import colors from 'colors';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

import dotenv from 'dotenv';
dotenv.config();

import fetch from "node-fetch";

app.use(express.static('public'))

app.listen('33333', function(){
  console.log("Backend listening on Port: 33333".black.bgWhite);
  //mysql connection
  //conToMysql();
  //first github get req
  fetchGithubOwn();
  fetchGithubBeanboiz();
  getAPOD();
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
          size: t.size,
          stars: t.stargazers_count
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
* GITHUB BEANS
*/

let gitItemsBeans = {
  items: []
}

function fetchGithubBeanboiz() {
  gitItemsBeans.items = [];
  fetch("https://api.github.com/orgs/B34nB01z/repos?type=all&direction=desc", { method: "GET" })
  .then(res => res.json())
  .then(
    (result) => {
      let gitTemp = {
        temps: []
      };
      gitTemp.temps = result;
      gitTemp.temps.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at));
      gitTemp.temps.map(t => {
        gitItemsBeans.items.push({
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
          size: t.size,
          stars: t.stargazers_count
        });
      });
      console.log("\nUpdated Github Beanboiz Successfully!".blue);
    },
    (error) => {
      gitItemsBeans.items = {error: error.message}
      console.log(gitItemsBeans)
    }
  );
}
//update github beans every 5 minutes
setInterval(() => {
  fetchGithubBeanboiz();
}, 5*60*1000); //== 5 min


//get
app.get('/gitbeans', function(req, res) {
  res.json(gitItemsBeans).end();
});

/*
* Gitbut beans OVER
*/

/*
* Projects START
*/
import projectsJson from './res/projects.js'
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
import languagesJson from './res/languages.js'
//get
app.get('/languages', function(req, res) {
  res.json(languagesJson).end()
})

/*
* Languages OVER
*/

/*
* NASA APOD
*/

let nasaApod;
//get image
function getAPOD() {
  const end = new Date().toISOString().split("T")[0];
  let start = new Date();
  start.setDate(start.getDate() - 5)
  start = start.toISOString().split("T")[0]

  fetch(`https://api.nasa.gov/planetary/apod?start_date=${start}&end_date=${end}&api_key=${process.env.NASA_API}`, { method: "GET" })
  .then(res => res.json())
  .then(res => {
    let cur = "";
    for(const item of res) {
      if(item.media_type == 'image')
        cur = item.hdurl
    }

    fetch(cur)
      .then(res => res.buffer())
      .then(async(buffer) => {
        buffer = await imagemin.buffer(buffer, { plugins: [imageminWebp({quality: 80})]});
        nasaApod = "data:image/webp;base64," + buffer.toString('base64');
        console.log("\nFetched APOD!".blue);
      });

  });
}

//update every hour
setInterval(() => {
  getAPOD();
}, 1*60*60*1000) // == 1h

//get
app.get('/apod', function(req, res) {
  res.json({
    'data': nasaApod,
  }).end()
})

/*
* Nasa OVER
*/

export default app;