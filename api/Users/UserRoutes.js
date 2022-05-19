const express = require("express");
const userRouter = express.Router();
const userControllers = require("./UserControllers");

userRouter
  .route("/countries")
  .get(userControllers.getCountries)
  .post(userControllers.addCountry);

userRouter.route("/id/:id").get(userControllers.getUserByID);

//@route GET && POST - /posts/
userRouter
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.registerUser);

module.exports = userRouter;
