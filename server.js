'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const urlEncodedParser = bodyParser.urlencoded( { extended: true });

app.use(express.static('./public'));

app.get('/', function(request, response) {
  response.sendFile('index.html', {root: '.'});
});

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  // (requestProxy({
  //   url: `https://api.github.com/${request.params[0]}`,
  //   headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  // }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.listen(PORT, function() {
  console.log(`started server on port: ${PORT}`);
});

app.get('*', function(request, response) {
  response.sendFile('index.html', {root: '.'});
});
