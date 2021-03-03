const asyncHandler = require("express-async-handler");
const Post = require("../models/PostModel");

// get all posts
exports.getPosts = asyncHandler(async (req, res) => {
  const post = await Post.find();
  res.status(200).json(post);
});
// get single post
exports.getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.status(200).json(post);
});

// create post
exports.createPost = asyncHandler(async (req, res) => {
  const post = new Post({
    title: "Sample title",
    imagePath: "/images/sample.jpg",
    description: "Sample description",
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

// update post
exports.updatePost = asyncHandler(async (req, res) => {
  const { title, imagePath, description } = req.body;

  const post = await Post.findById(req.params.id);

  if (post) {
    post.title = title;
    post.imagePath = imagePath;
    post.description = description;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("post not found");
  }
});

// delete post by id
exports.deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: "Post removed" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});
