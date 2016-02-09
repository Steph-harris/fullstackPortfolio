var express = require("express");
var session = require("express-session");

var app = express();
var PORT = process.env.PORT || 8080;

app.use("/scripts", express.static("public/scripts"));
app.use("/css", express.static("public/css"));
app.use("/images", express.static("public/images"));
//session middleware
app.use(
  session({
    secret: 'my secret',
    cookie: {
      maxAge:60000
    },
    saveUninitialized: true,
    resave: false
  }
));

app.get("/", function(req, res){
  var sess = req.session;
  res.sendFile(process.cwd() + "/views/home.html");
});
app.get("/projects", function(req, res){
  res.sendFile(process.cwd() + "/views/projects.html");
});
app.get("/blog", function(req, res){
  res.sendFile(process.cwd() + "/views/blog.html");
});
app.get("/showcase", function(req, res){
  res.sendFile(process.cwd() + "/views/showcase.html");
});
app.get("/:anything_else", function(req, res){
  res.send("That file doesn't exist. Did you mean to put / ?");
});

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
});