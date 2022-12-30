require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

//get the data first
app.get('/api/whoami', (req, res) => {

  const ipaddress = req.header('x-forwarded-for');
  const language = req.header('accept-language')
  const software = req.header('user-agent')
  res.json({ "ipaddress": ipaddress, "language": language, "software": software });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
