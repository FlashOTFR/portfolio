const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

//Created Server
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//HTML Routes
app.get("/", (req, res) => res.render("home"));
app.get("/portfolio", (req, res) => res.render("portfolio"));
app.get("/contact", (req, res) => res.render("contact"));

//Set static folder
app.use(express.static("public"));

//Server listener
app.listen(PORT, console.log(`Server started on port ${PORT}`));
