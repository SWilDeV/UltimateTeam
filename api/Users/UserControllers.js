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
        res.status(200).json({ msg: "user already exist" });
      } else {
        console.log("user added");
        UserServices.getUserByUsernameDB(Username, function (err, data) {
          if (err) {
            console.log("ERROR : ", err);
          } else {
            delete data.Password;
            const token = jwt.sign({ data: data }, process.env.SECRET, {
              expiresIn: 3600, // 1 week
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

    UserServices.getUserByUsernameDB(Username, function (err, datas) {
      if (err) {
        console.log("ERROR : ", err);
        res.status(200).json({
          msg: "user not found",
          success: false,
        });
      } else if (datas != null) {
        UserServices.comparePassword(
          Password,
          datas.Password,
          (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              const token = jwt.sign({ datas: datas }, process.env.SECRET, {
                expiresIn: 3600, // 1 hour
              });
              res.status(201).json({
                msg: "user found",
                success: true,
                token: "JWT " + token,
                data: {
                  UserID: datas.UserID,
                  Username: datas.Username,
                  Email: datas.Email,
                  FirstName: datas.FirstName,
                  Avatar: datas.Avatar,
                  LastName: datas.LastName,
                  City: datas.City,
                  Presentation: datas.Presentation,
                  DateJoined: datas.DateJoined,
                  Country: datas.Country,
                },
              });
            } else {
              return res
                .status(201)
                .json({ success: false, msg: "Wrong password" });
            }
          }
        );
      } else {
        res.status(201).json({
          success: false,
          msg: "wrong combination Username/Password",
        });
      }
    });
  } catch (error) {
    next(error);
  }
};
