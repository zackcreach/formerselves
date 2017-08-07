const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('App running on localhost at port: ' + PORT);
});
