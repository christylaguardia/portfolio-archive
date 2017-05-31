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

// QUESTION: do i need to add more app.get

app.listen(PORT, function() {
  console.log(`started server on port: ${PORT}`);
});

app.get('*', function(request, response) {
  response.sendFile('index.html', {root: '.'});
});
