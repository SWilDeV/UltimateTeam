const User = require("./UserModel");
const UserServices = require("./UserServices");

exports.getAllUsers = async (req, res, next) => {
  try {
    res.send("get all post routes");
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

exports.registerUser = async (req, res, next) => {
  try {
    let {
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
      DateJoined,
    } = req.body;

    // let newUser = new User(req.body);
    let newUser = new User(
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
    );
    console.log(newUser);
    // let newUser2 = await newUser.addUser();
    // console.log(newUser2);

    res.status(201).json({ newUser });
    // res.status(201).json({ message: "user registered" });
  } catch (error) {
    next(error);
  }
};
