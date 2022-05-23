const User = require("./UserModel");
const UserServices = require("./UserServices");

exports.getAllUsers = (req, res) => {
  try {
    UserServices.getUsers(function (err, data) {
      if (err) {
        console.log("ERROR : ", err);
      } else {
        res.status(201).json({ data });
      }
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getUserByUsername = (req, res, next) => {
  try {
    let Username = req.body.Username;
    UserServices.getUserByUsernameDB(Username, function (err, data) {
      if (err) {
        console.log("ERROR : ", err);
      } else {
        console.log(data);
        res.status(201).json({ data });
      }
    });
  } catch (e) {
    console.log(e);
  }
};
exports.getUserByID = async (req, res, next) => {
  try {
    // let Username = req.body.Username;
    // const [newUser3, _] = await UserServices.getUserByUsername(Username);
    // console.log(newUser3);
    // res.status(201).json({ newUser3 });
  } catch (e) {
    console.log(e);
  }
};

exports.registerUser = async (req, res, next) => {
  try {
    const Username = req.body.Username;
    const DateJoined = new Date().toJSON().slice(0, 10);
    const newUser = new User(
      Username,
      (Email = req.body.Email),
      (Password = req.body.Password),
      (FirstName = req.body.FirstName),
      (LastName = req.body.LastName),
      (City = req.body.City),
      (Presentation = req.body.Presentation),
      (Avatar = req.body.Avatar),
      (CountryName = req.body.CountryName),
      DateJoined,
      (CountryID = req.body.CountryID),
      (IdGame = req.body.IdGame)
    );
    UserServices.addUser(newUser, function (err, data) {
      if (err) {
        console.log("ERROR : ", err);
        res.status(404).json({ msg: "user already exist" });
      } else {
        UserServices.getUserByUsernameDB(Username, function (err, data) {
          if (err) {
            console.log("ERROR : ", err);
          } else {
            delete data.Password;
            res.status(201).json({ data });
          }
        });
      }
    });
  } catch (error) {
    next(error);
  }

  exports.getCountries = async (req, res, next) => {
    try {
      const [countries, _] = await UserServices.getCountries();
      res.status(200).json({ countries });
    } catch (e) {
      console.log(e);
    }
  };

  exports.addCountry = async (req, res, next) => {
    try {
      let { NomPays, Drapeau } = req.body;
      const Pays = await UserServices.addCountry(NomPays, Drapeau);
      res.status(201).json({ message: "Post created" });
    } catch (e) {
      console.log(e);
    }
  };
};
