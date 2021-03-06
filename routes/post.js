const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const verify = require('./verifyToken');

/// Gets back all Posts
router.get('/', verify,async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json({posts: posts});
    }catch(err){
        res.json({
            message: err
        })
    }
    
});


/// Gets back Specific Posts
router.get('/:postID', verify,async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postID);
        res.json({post: post});
    }catch(err){
        res.json({
            message: err
        })
    }
});

/// Deletes back Specific Posts
router.delete('/:postID',verify, async (req,res)=>{
    try{
        const post = await Post.findByIdAndDelete(req.params.postID);
        res.json({deleted: post});
    }catch(err){
        res.json({
            message: err
        })
    }
});

/// Update Specific Posts
router.patch('/:postID', verify,async (req,res)=>{
    try{
        const post = await Post.findByIdAndUpdate(req.params.postID,
            {
                $set:{
                    title:req.body.title,
                    description: req.body.description,
                    creator: req.user._id
                }
        });
        res.json({updated: post});
    }catch(err){
        res.json({
            message: err
        })
    }
});

/// Creates A Post
router.post('/', verify, async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description: req.body.description,
        creator: req.user._id
    });

    try{
        const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({
            message: err,
        })
    }
});

module.exports=router;