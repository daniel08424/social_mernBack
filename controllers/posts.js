import Post from "../models/Post.js";
import User from "../models/User.js";

//CREATE POST
export const createPost = async(req,res)=>{
    try{
        const {userId, description, picturePath} = req.body;
        const user = await User.findById(userId);

        const newPost = new Post({
            userId,
            firstName : user.firstName,
            lastName : user.lastName,
            location : user.location,
            description,
            userPicturePath : user.picturePath,
            picturePath,
            likes : {}, //it is empty because initially likes will be 0  
            comments : []
        })

        await newPost.save();

        //this will grab all the post and return to frontEnd which will have all feeds and the Newest feed is get updated
        const post = await Post.find();

        res.status(201).json(post)
    }
    catch(err){
        res.status(409).json({message : err.message});
    }
}

//READ AND GRAB ALL THE POSTS

export const getFeedPosts = async(req,res)=>{
    try{
        const post = await Post.find();
        res.status(200).json(post);
    }
    catch(err){
        res.status(404).json({message : err.message});
    }
}

//GRAB ONLY THE USER FEED POST 
export const getUserPosts = async(req,res) =>{
    try{
        const {userId} = req.params;
        const post = await Post.find({userId});
        res.status(200).json(post);
    }
    catch(err){
        res.status(404).json({message : err.message});
    }
}

//UPDATE 
export const likePost = async(req,res)=>{
    try{
        const { id } = req.params;
        const { userId } = req.body;

        const post = await Post.findById(id);
        const isLikeed = post.likes.get(userId); //Check in the likes that the userId exists
        // if userId exist, means the user is liked the post

        if(isLikeed){//if userId esist, delete the userId for decreasing the like count
            post.likes.delete(userId);
        }else{//if userId is not Present , set the userId and make the boolean as true, it will increase like count
            post.likes.set(userId,true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id, // pass which id to update
            {likes : post.likes}, // modified like value
            { new : true } // we set the new Object to true
        )

        res.status(200).json(updatedPost);
    }
    catch(err){
        res.status(404).json({message : err.message});
    }
}