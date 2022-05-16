const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
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

app.get("/", (req, res) => {
  res.send("Hello World boule!");
});

//start server
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
