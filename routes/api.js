const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const { ObjectId } = require("mongodb");
const { json } = require("express/lib/response");
const blogController = require("../controller/blogController");

router.get("/blog", blogController.getBlog);
router.post("/blog", blogController.createBlog);
router.delete("/blog", blogController.deleteBlog);

module.exports = router;
