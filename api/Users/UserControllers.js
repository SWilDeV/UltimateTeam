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
    const Username = req.body.data.Username;
    const DateJoined = new Date().toJSON().slice(0, 10);
    const newUser = new User(
      Username,
      (Email = req.body.data.Email),
      (Password = req.body.data.Password),
      (FirstName = req.body.data.FirstName),
      (LastName = req.body.data.LastName),
      (City = req.body.data.City),
      (Presentation = req.body.data.Presentation),
      (Avatar = req.body.data.Avatar),
      (CountryName = req.body.data.CountryName),
      DateJoined,
      (IdPays = req.body.data.IdPays)
    );
    UserServices.addUser(newUser, function (err, data) {
      if (err) {
        console.log("ERROR : ", err);
        res.status(404).json({ msg: "user already exist" });
      } else {
        console.log("user added");
        UserServices.getUserByUsernameDB(Username, function (err, data) {
          if (err) {
            console.log("ERROR : ", err);
          } else {
            delete data.Password;
            const token = jwt.sign({ data: data }, process.env.SECRET, {
              expiresIn: 604800, // 1 week
            });
            res.status(201).json({
              token: "JWT " + token,
              data,
            });
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
    const Username = req.body.data.Username;
    const Password = req.body.data.Password;

    UserServices.getUserByUsernameDB(Username, function (err, data) {
      if (err) {
        console.log("ERROR : ", err);
        res.status(404).json({
          msg: "user not found",
          success: false,
        });
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
                msg: "user found",
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
                  DateJoined: data.DateJoined,
                  Country: data.Country,
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
