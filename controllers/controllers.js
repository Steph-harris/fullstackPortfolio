require("dotenv").config();

var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var logger = require("morgan");
var nodemailer = require("nodemailer");

var mailToEmail = process.env.MAILER_EMAIL;
var mailToPass = process.env.MAILER_PASS;

router.use("/scripts", express.static("public/scripts"));
router.use("/css", express.static("public/css"));
router.use("/images", express.static("public/images"));
router.use(logger('dev'));
router.use(bodyParser.urlencoded({extended:false}));

router.get("/", function(req, res){
  var sess = req.session;
  res.sendFile(process.cwd() + "/views/home.html");
});
router.get("/projects", function(req, res){
  res.sendFile(process.cwd() + "/views/projects.html");
});
router.get("/blog", function(req, res){
  res.sendFile(process.cwd() + "/views/blog.html");
});
router.get("/showcase", function(req, res){
  res.sendFile(process.cwd() + "/views/showcase.html");
});
router.get("/pictest", function(req, res){
  res.sendFile(process.cwd() + "/views/picTest.html");
});
router.get("/:anything_else", function(req, res){
  res.send("That file doesn't exist. Did you mean to put / ?");
});
router.post("/sendMessage", function(req, res){
  var body = req.body;

  let transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: mailToEmail,
         pass: mailToPass
      }
  });

  const mailOptions = {
    from: body.email,
    to: mailToEmail,
    subject: `New Message From ${body.name}`,
    html: `<p>${body.message}</p>`
  };

  transport.sendMail(mailOptions, function (err, info) {
    if(err){
      console.log(err)
      res.sendStatus(500);
    } else{
      console.log(info);
      res.sendStatus(200);
    }
  });
});

module.exports = router;
