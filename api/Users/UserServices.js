const User = require("./UserModel");
const db = require("../../config/Database");
const bcrypt = require("bcrypt");

let addUser = function (callback) {
  console.log(this.Password);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.Password, salt, (err, hash) => {
      if (err) throw err;
      this.Password = hash;
      // newUser.save(callback);
      console.log(this.Password);
    });
  });
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
  addUser,
};
