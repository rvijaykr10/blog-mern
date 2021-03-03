const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  getPost,
  deletePost,
} = require("../controller/postController");

const router = express.Router();

router.route("/").get(getPosts).post(createPost).put(updatePost);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
