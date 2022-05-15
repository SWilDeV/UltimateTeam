const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const mysql = require("mysql");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
require("dotenv").config();

//Connexion to express
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Port
// const port = process.env.PORT || 8080;
const port = 3000;

// Connexion to DB
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  insecureAuth: true,
});

// connection.connect();
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to DB!");
});

// connection.end();

app.get("/", (req, res) => {
  res.send("Hello World boule!");
});

//start server
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
