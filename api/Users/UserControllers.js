const User = require("./UserModel");
const UserServices = require("./UserServices");

exports.getAllUsers = async (req, res, next) => {
  try {
    const [users, _] = await UserServices.getUsers();
    res.status(200).json({ users });
  } catch (e) {
    console.log(e);
  }
};

exports.getUserByUsername = async (req, res, next) => {
  try {
    let Username = req.body.Username;
    const [user, _] = await UserServices.getUserByUsernameDB(Username);
    const userFinal = user[0];
    res.status(201).json({ userFinal });
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

    const operationAddUser = await UserServices.addUser(newUser);
    console.log(operationAddUser);
    setTimeout(async () => {
      const [newUser2, _] = await UserServices.getUserByUsernameDB(Username);
      const userF = newUser2[0];
      if (userF == undefined) {
        res.status(400).json({ message: "Failed to add user" });
      } else {
        userF.Password = "";
        res.status(201).json({ userF });
      }
    }, "200");
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
