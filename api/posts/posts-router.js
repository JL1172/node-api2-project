// implement your posts router here
const express = require("express");
const PostData = require("./posts-model");

const router = express.Router();
//!get general
router.get("/",async(req,res)=> {
    try {
        const posts = await PostData.find();
        res.status(200).json(posts)
    } catch {
        res.status(500).json({ message: "The posts information could not be retrieved" })
    }
})
//!get general
//!getbyid
router.get("/:id",async(req,res)=> {
    try {
        const {id} = req.params;
        const postById = await PostData.findById(id);
        if (!postById) {
            res.status(404).json({ message: "The post with the specified ID does not exist" })
        } else {
            res.status(200).json(postById)
        }
    } catch {
        res.status(500).json({ message: "The post information could not be retrieved" })
    }
})
//!getbyid
//!post
router.post("/",async(req,res)=> {
    try {
        const {title,contents} = req.body;
        if (!title || !contents) {
            res.status(400).json({ message: "Please provide title and contents for the post" });
        } else {
            const postedData = await PostData.insert({title : title,contents : contents}); 
            res.status(201).json(postedData); 
        }
    } catch {
        res.status(500).json({ message: "There was an error while saving the post to the database" })
    }
})
//!post
module.exports = router;