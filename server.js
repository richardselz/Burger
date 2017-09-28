var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));

app.use(expres.static("public"));

app.use(methodOverride("_method"));

var exphand = require("express-handlebars");

app.engine("handlebars", exphand({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");

app.use("/", routes);

app.listen(port);
