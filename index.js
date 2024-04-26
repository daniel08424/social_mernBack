import express from "express";
import bodyParser from "body-parser";
import mongoDb from "mongodb";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import  router  from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import { register } from "./controllers/auth.js"
import postRoutes from "./routes/posts.js";
import { createPost} from "./controllers/posts.js"
import { verifyToken } from "./middleware/authorization.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import {users , posts} from "./data/index.js";

const __file_name = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__file_name);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb",extended : true}));
app.use(cors());
app.use("/assets",express.static(path.join(__dirName,"public/assets")));

// Setup a file Storage
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,"public/assets");
    },
    filename : function(req,file,cb){
        cb(null,file.originalname);
    }
});
const upload = multer({storage});

//AUTHENTICATION FUNCTION

//Routes with files        Upload the picture locally to public/assert folder
app.post("/auth/register", upload.single("picture"), register /* this is the controller which provide logic for end point */);
app.post("/posts",verifyToken, upload.single("picture") , createPost);

//ROUTES
app.use("/auth",router);
app.use("/users", userRoutes);
app.use("/posts",postRoutes);


//MONGOOSE SETUP
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    app.listen(PORT, () => console.log(`Server port : ${PORT}`))

    // Add Data ONE TIME
    // User.insertMany(users);
    // Post.insertMany(posts);
}).catch((error)=>console.log(`${error} did not connect`));
