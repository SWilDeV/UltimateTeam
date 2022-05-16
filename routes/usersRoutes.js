const express = require("express");
const userRouter = express.Router();
const userControllers = require("../controllers/userControllers");

//@route GET && POST - /posts/
userRouter
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createNewUser);

userRouter.route("/:id").get(userControllers.getUserByID);

module.exports = userRouter;
