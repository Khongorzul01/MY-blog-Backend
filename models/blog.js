const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = mongoose.connection;

const blogSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: [true, "Enter the name!"],
  },
  image: {
    type: String,
    required: [true, "Enter the image!"],
  },
  description: {
    type: String,
    required: [true, "Enter the desc!"],
  },
});

module.exports = mongoose.model("blog", blogSchema);
