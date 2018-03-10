// DEPENDENCIES - npm packages needed for server function
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// EXPRESS CONFIGURATION - sets up properties for express server
// tells node that we are creating an express server
var app = express();

// sets an initial port
var PORT = process.env.PORT || 3000;

// serve static content for the app from the "public" directory
app.use(express.static(__dirname + "/public"));

// set up express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(methodOverride("_method"));

// Set Handlebars as templating engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTER - import routes and give server acces to them
var routes = require("./controllers/burgersController.js");

app.use("/",routes);

// LISTENER - listens for command to start server
app.listen(PORT, function() {
	console.log("Burger-App listening at localhost on PORT: " + PORT);
});
