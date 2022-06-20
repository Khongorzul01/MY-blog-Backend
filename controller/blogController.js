const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const mongoose = require("mongoose");

const getBlog = (req, res) => {
  Blog.find({}, function (err, data) {
    if (err) {
      next;
    } else {
      return res.json({
        data: data,
      });
    }
  });
};

const createBlog = (req, res, next) => {
  const reqBody = req.body;
  console.log(reqBody.name);
  let newBlog = new Blog({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
  });
  newBlog
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Success",
        data: data,
      });
    })
    .catch(next);
};

const deleteBlog = (req, res, next) => {
  let blogName = {
    name: "Khongorzul",
  };
  Blog.findOneAndDelete({ name: req.body.name }, blogName, (err, data) => {
    if (err) next;
    res.send("delete");
  });
};

module.exports = { getBlog, createBlog, deleteBlog };
