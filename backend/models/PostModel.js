const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
  },
  imagePath: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("post", PostSchema);
