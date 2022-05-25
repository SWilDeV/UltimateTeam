const User = require("./UserModel");
const UserServices = require("./UserServices");
const jwt = require("jsonwebtoken");
const passport = require("passport");

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
        console.log("ERROR with getUserByUsername: ", err);
        res.status(404).json({ msg: "server error" });
      } else {
        res.status(201).json({ data });
      }
    });
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
};

exports.authenticate = async (req, res, next) => {
  try {
    const Username = req.body.Username;
    const Password = req.body.Password;

    UserServices.getUserByUsernameDB(Username, function (err, data) {
      if (err) {
        console.log("ERROR : ", err);
        res.status(404).json({ msg: "user not found" });
      } else if (data != null) {
        UserServices.comparePassword(
          Password,
          data.Password,
          (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              const token = jwt.sign({ data: data }, process.env.SECRET, {
                expiresIn: 604800, // 1 week
              });

              res.status(201).json({
                success: true,
                token: "JWT " + token,
                data: {
                  UserID: data.UserID,
                  Username: data.Username,
                  Email: data.Email,
                  FirstName: data.FirstName,
                  Avatar: data.Avatar,
                  LastName: data.LastName,
                  City: data.City,
                  Presentation: data.Presentation,
                  LastName: data.LastName,
                  DateJoined: data.DateJoined,
                },
              });
            } else {
              return res
                .status(404)
                .json({ success: false, msg: "Wrong password" });
            }
          }
        );
      } else {
        res.status(404).json({
          success: false,
          msg: "wrong combinaison Username/Password",
        });
      }
    });
  } catch (error) {
    next(error);
  }
};
