const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: '.' });
});

app.get('*', function(req, res) {
  res.redirect('/');
});

app.listen(PORT, function() {
  console.log(`started server on port: ${PORT}`);
});
