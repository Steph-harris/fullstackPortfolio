var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use("/scripts", express.static("public/scripts"));
app.use("/css", express.static("public/css"));
app.use("/images", express.static("public/images"));

app.get("/", function(req, res){
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

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
});