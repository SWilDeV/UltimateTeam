const User = require("./UserModel");
const db = require("../../config/Database");
const bcrypt = require("bcrypt");

let addUser = function (User, callback) {
  try {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(User.Password, salt, (err, hash) => {
        User.Password = hash;
        if (err) throw err;
        let sql = `insert into Utilisateur (Username, Password, Email, FirstName, LastName, City, Presentation, Avatar, IdPays, DateJoined) VALUES('${User.Username}', '${User.Password}', '${User.Email}', '${User.FirstName}', '${User.LastName}', '${User.City}', '${User.Presentation}', '${User.Avatar}', '${User.CountryID}', '${User.DateJoined}');`;
        db.query(sql, function (err) {
          if (err) callback(err, null);
          else callback(null, "success");
        });
      });
    });
  } catch (err) {
    if (err) throw err;
  }
};

let getUsers = function (callback) {
  try {
    let sql = "SELECT * FROM Utilisateur;";
    db.query(sql, function (err, result) {
      if (err) callback(err, null);
      else callback(null, result);
    });
  } catch (err) {
    console.log(err);
  }
};
let getUserByUsernameDB = function (Username, callback) {
  try {
    let sql = `SELECT UserID, Username, Password, FirstName, LastName, Avatar, City, Presentation, Email, DateJoined, IdPays FROM Utilisateur WHERE Utilisateur.Username = '${Username}';`;
    // let sql = `SELECT UserID, Username,Password, FirstName, Avatar, City, Presentation, Email, DateJoined FROM Utilisateur LEFT JOIN Pays ON Utilisateur.IdPays = Pays.IdPays WHERE Utilisateur.Username = '${Username}';`;
    db.query(sql, function (err, result) {
      if (err) callback(err, null);
      else callback(null, result[0]);
    });
  } catch (err) {
    console.log(err);
  }
};

let getUserById = function (id, callback) {
  try {
    let sql = `SELECT UserID, Username,Password, FirstName,Avatar, FirstName, City, Presentation, Email,LastName, DateJoined FROM Utilisateur LEFT JOIN Pays ON Utilisateur.IdPays = Pays.IdPays WHERE Utilisateur.UserID = '${id}';`;
    db.query(sql, function (err, result) {
      if (err) callback(err, null);
      else callback(null, result[0]);
    });
  } catch (err) {
    console.log(err);
  }
};

let comparePassword = function (candidatePassword, hashedPassword, callback) {
  bcrypt.compare(candidatePassword, hashedPassword, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};

module.exports = {
  getUsers,
  addUser,
  getUserByUsernameDB,
  comparePassword,
  getUserById,
};
