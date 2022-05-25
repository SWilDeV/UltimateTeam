const express = require("express");
const userRouter = express.Router();
const userControllers = require("./UserControllers");

//@route GET && POST - /posts/
userRouter.route("/").get(userControllers.getAllUsers);

userRouter.route("/username").get(userControllers.getUserByUsername);

userRouter.route("/register").post(userControllers.registerUser);

userRouter.route("/authenticate").post(userControllers.authenticate);

module.exports = userRouter;
