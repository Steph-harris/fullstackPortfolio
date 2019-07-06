var express = require("express");
var routes = require('./controllers/controllers.js');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(routes);

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
});
