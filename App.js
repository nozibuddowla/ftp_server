const express = require("express");
const bodyParser = require("body-parser");
const exSession = require("express-session");
const expressValidator = require("express-validator");

const ftpsite = require("./controller/ftpserver");

const app = express();

app.set("view engine", "ejs");

//middleware
app.use("/assets", express.static("assets"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  exSession({
    secret: "my secret value",
    saveUninitialized: true,
    resave: false,
  })
);
app.use(expressValidator());

app.use("/ftpserver", ftpserver);

app.get("/", (req, res) => {
  res.redirect("/ftpserver");

});

app.listen(3000, (error) => {
  console.log("express server started at 3000...");
});