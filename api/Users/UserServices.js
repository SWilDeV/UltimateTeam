const User = require("./UserModel");
const db = require("../../config/Database");
const bcrypt = require("bcrypt");


let addUser = function (User) {
  // console.log(User.Password);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(User.Password, salt, (err, hash) => {
      if (err) throw err;
      User.Password = hash;
      let sql = `insert into Utilisateur (Username, Password, Courriel, Prenom, Nom, Ville, Presentation, Avatar, IdPays, IdGame, DateJoined) VALUES('${User.Username}', '${User.Password}', '${User.Email}', '${User.FirstName}', '${User.LastName}', '${User.City}', '${User.Presentation}', '${User.Avatar}', '${User.CountryID}', '${User.IdGame}', '${User.DateJoined}');`;
      return db.execute(sql);
    });
  });
};

let getUsers = function (callback) {
  try {
    let sql = "SELECT * FROM Utilisateur;";
    return db.execute(sql);
  } catch (err) {
    console.log(err);
  }
};

let getCountries = function (callback) {
  try {
    let sql = "SELECT * FROM Pays;";
    return db.execute(sql);
  } catch (err) {
    console.log(err);
  }
};
let addCountry = function (NomPays, Drapeau) {
  try {
    let sql = `Insert into Pays (NomPays, Drapeau) values ('${NomPays}', '${Drapeau}');`;
    return db.execute(sql);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCountries,
  addCountry,
  getUsers,
  addUser,
};
