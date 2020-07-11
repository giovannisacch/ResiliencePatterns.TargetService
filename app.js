var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var type = req.query.type
  var actualDate = new Date();
  var actualHour = `${actualDate.getHours()}:${actualDate.getMinutes()}:${actualDate.getSeconds()}`
  console.log(`Nova requisição as ${actualHour} com o type ${type}`)

  switch (type) {
      case '1':
        return res.status(200).json({message: 'OK', fallback: false});
      case '2':
        return res.status(408).json();
      case '3':
          return res.status(400).json({message: 'invalidEntry'})
      case '4':
          return res.status(500).json()
      default:
          return res.status(500).json()
  }
});

app.listen(3000);