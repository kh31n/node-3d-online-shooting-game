/*
  Author:Hirotoshi Kawai
  App: node-3d-online-shooting-game
  Description: Online 3D Shooting Game with Node.js and Express, WebSocket Extra...  
*/

const express = require('express');
const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render("./index.ejs");
});

app.listen(3000, () => console.log("server starting...\nhttp:localhost:3000 can see."));
