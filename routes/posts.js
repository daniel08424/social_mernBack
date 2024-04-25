import express from "express";
import {getFeedPosts , getUserPosts, likePost} from "../controllers/posts.js";
import { verifyToken } from "../middleware/authorization.js";

const postRoutes = express.Router();

//READ (The below command will grab the user feed on the home page)
postRoutes.get("/",verifyToken,getFeedPosts);
postRoutes.get("/:userId/posts" , verifyToken, getUserPosts);

//UPDATE
postRoutes.patch("/:id/like",verifyToken, likePost);

export default postRoutes;
