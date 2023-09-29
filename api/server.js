// implement your server here
// require your posts router and connect it here
const express = require("express");
const PostRouter = require("./posts/posts-router"); 

const server = express();


//routes
server.use(express.json());
server.use("/api/posts",PostRouter)
//routes

module.exports = server; 