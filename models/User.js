const db = require("../config/Database");
const bcrypt = require("bcrypt");

class User {
  constructor(
    Username,
    Email,
    Password,
    FirstName,
    LastName,
    City,
    UserID,
    Presentation,
    Avatar,
    CountryName,
    DateJoined
  ) {
    this.Username = Username;
    this.Password = Password;
    this.Email = Email;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.City = City;
    this.UserID = UserID;
    this.Presentation = Presentation;
    this.Avatar = Avatar;
    this.CountryName = CountryName;
    this.DateJoined = DateJoined;
  }

  addUser = function (newUser, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
};
}

module.exports = User;
