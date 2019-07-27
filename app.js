/*
  Author:Hirotoshi Kawai
  App: node-3d-online-shooting-game
  Description: Online 3D Shooting Game with Node.js and Express, WebSocket Extra...  
*/

const express = require('express');
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000);
