const mysql = require("mysql2");
require("dotenv").config({ path: "../../.env" });
const bcrypt = require("bcrypt");

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

let getUsers = function () {
  con.connect(function (err) {
    let sql = "SELECT UserId, password FROM Utilisateur;";
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      // console.log(result);
      let counter = 0;
      result.forEach((element) => {
        console.log(element.password);
        bcryptor(element.password);
        counter += 1;
      });
      console.log(counter);
    });
  });
};

let bcryptor = function (p_password) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(p_password, salt, (err, hash) => {
      console.log(hash);
    });
  });
};

getUsers();
