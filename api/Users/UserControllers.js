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
    // let Pays = new Post(title, body);

    // post = await post.save();

    const Pays = await UserServices.addCountry(NomPays, Drapeau);
    res.status(201).json({ message: "Post created" });
  } catch (e) {
    console.log(e);
  }
};

exports.getUserByID = async (req, res, next) => {
  try {
    res.send("get User by ID");
  } catch (e) {
    console.log(e);
  }
};

exports.registerUser = (req, res, next) => {
  try {
    let {
      Username,
      Email,
      Password,
      FirstName,
      LastName,
      City,
      Presentation,
      Avatar,
      CountryName,
      CountryID,
      IdGame,
    } = req.body;

    let DateJoined = new Date().toJSON().slice(0, 10);
    let newUser = new User(
      Username,
      Email,
      Password,
      FirstName,
      LastName,
      City,
      Presentation,
      Avatar,
      CountryName,
      DateJoined,
      CountryID,
      IdGame
    );

    let newUser2 = UserServices.addUser(newUser);
    console.log(newUser2);
    res.status(201).json({ newUser2 });
    // res.status(201).json({ message: "user registered" });
  } catch (error) {
    next(error);
  }
};
