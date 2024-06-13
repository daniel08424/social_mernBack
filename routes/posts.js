import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import Post from "../models/Post.js";
import User from "../models/User.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

router.patch('/:postId/comment', verifyToken, async (req, res) => {
  try {
    const { postId } = req.params;
    
    const { userId, commentText } = req.body;

    const query = { _id: postId };

    const user = await User.findById(userId);
    const userName = `${user.firstName} ${user.lastName}`

    const update = {
      $push: { comments: { userName, commentText } },
    };

    const options = { new: true };

    const updatedPost = await Post.findOneAndUpdate(query, update, options);

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
  
// Get comments of a post
router.get("/:postId/comments",verifyToken, async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(post.comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



export default router;
