const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/postControllers");

//@route GET && POST - /posts/
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.CreateNewPost);

router.route("/:id").get(postController.getPostByID);

module.exports = router;
